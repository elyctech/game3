import React, {
  ReactElement,

  useEffect,
  useRef
} from "react";

import {
  EngineService,
  ViewportManager
} from "@game3/eng3";

import "./index.scss";

interface DemoViewMainProps {
  engineService   : EngineService;
  viewportManager : ViewportManager;
}

function noop() {
  // No-op
}

export default function DemoViewMain(
  props : DemoViewMainProps
) : ReactElement {
  const {
    engineService,
    viewportManager
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(
    () => {
      const context  = canvasRef.current?.getContext("webgl2");

      let cleanup : (() => void) | undefined = undefined;

      if (context) {
        // Sync the canvas size and WebGL 2 viewport size.
        const stopManagingViewport = viewportManager.syncViewportToSize(
          context
        );

        // Create an engine with the retrieved context
        const engine  = engineService.createEngine(
          context
        );

        // Timeout is necessary due to the viewport syncing mechanism. Syncing requires a frame to apply properly,
        // and using setTimeout provides the frame needed.
        let stopEngine  = noop;

        // setTimeout(
        //   () => {
        // Get engine data
        const content   = engine.getContent();
        const state     = engine.getState();
        const settings  = engine.getSettings();

        // Add testing form and model content
        content.acquireForm("testForm").setPositions(new Float32Array([
          0.0, 0.5, 0.0,
          0.5, -0.5, 0.0,
          -0.5, -0.5, 0.0,
        ]));

        content.acquireModel("testModel").setForm("testForm");

        // Add testing entity state

        state.acquireEntity("testEntity").setModel("testModel");

        // Set the camera settings

        settings.acquireCamera("main", "perspective")
          .setFieldOfView(
            Math.PI / 3
          ).setNear(
            1
          ).setFar(
            2000
          ).setLocation(
            0,
            2.8,
            30
          );

        settings.useCamera("main");

        // Start the engine
        stopEngine  = engine.start();
        //   }
        // );

        // Engine-related clean-up operations.
        cleanup = () => {
          stopEngine();
          stopManagingViewport();
        };
      }

      return cleanup;
    },
    [
      engineService,
      viewportManager
    ]
  );

  return (
    <canvas
      ref = {canvasRef}
    />
  );
}
