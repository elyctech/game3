import React, {
  ReactElement,

  useEffect,
  useRef,
  useState
} from "react";

import {
  viewportManager
} from "@game3/eng3";

import "./index.scss";

function createShader(
  gl2     : WebGL2RenderingContext,
  type    : GLenum,
  source  : string
) : WebGLShader {
  const shader = gl2.createShader(type);

  if (!shader) {
    throw new Error("Could not create WebGL shader.");
  }

  gl2.shaderSource(shader, source);
  gl2.compileShader(shader);

  const success = gl2.getShaderParameter(shader, gl2.COMPILE_STATUS);

  if (!success) {
    const error = gl2.getShaderInfoLog(shader) || "Could not compile WebGL shader.";
    gl2.deleteShader(shader);

    throw new Error(error);
  }

  return shader;
}

function createProgram(
  gl2             : WebGL2RenderingContext,
  vertexShader    : WebGLShader,
  fragmentShader  : WebGLShader
) : WebGLProgram {
  const program = gl2.createProgram();

  if (!program) {
    throw new Error("Could not create WebGL program.");
  }

  gl2.attachShader(program, vertexShader);
  gl2.attachShader(program, fragmentShader);
  gl2.linkProgram(program);

  const success = gl2.getProgramParameter(program, gl2.LINK_STATUS);

  if (!success) {
    const error = gl2.getProgramInfoLog(program) || "Could not link WebGL program.";
    gl2.deleteProgram(program);

    throw new Error(error);
  }

  return program;
}

function compileProgram(
  gl2                   : WebGL2RenderingContext,
  vertexShaderSource    : string,
  fragmentShaderSource  : string
) : WebGLProgram {
  const vertexShader = createShader(gl2, gl2.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl2, gl2.FRAGMENT_SHADER, fragmentShaderSource);

  return createProgram(gl2, vertexShader, fragmentShader);
}

function testWebgl(
  gl2 : WebGL2RenderingContext
) : void {
  const gl2Program  = compileProgram(
    gl2,
    `#version 300 es

void main() {
  gl_Position = vec4(0, 0, 0, 1);  // center
  gl_PointSize = 120.0;
}
`,
    `#version 300 es

precision highp float;

out vec4 outColor;

void main() {
  outColor = vec4(1, 0, 0, 1);  // red
}
`
  );

  gl2.useProgram(
    gl2Program
  );

  gl2.drawArrays(
    gl2.POINTS,
    0,
    1
  );
}

export default function ShellMain() : ReactElement {
  const [
    context,
    setContext
  ] = useState<WebGL2RenderingContext>();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(
    () => {
      const newContext  = canvasRef.current?.getContext("webgl2");

      let cleanup : (() => void) | undefined = undefined;

      if (newContext) {
        setContext(
          newContext
        );

        // Stop managing the viewport whenever this component unmounts.
        cleanup = viewportManager.syncViewportToSize(
          newContext
        );

        // Timeout is necessary due to the viewport syncing mechanism. Syncing requires a frame to apply properly,
        // and using setTimeout provides the frame needed.
        setTimeout(
          () => {
            testWebgl(
              newContext
            );
          }
        );
      }

      return cleanup;
    },
    []
  );

  return (
    <canvas
      ref = {canvasRef}
    />
  );
}
