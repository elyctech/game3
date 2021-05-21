import Engine from "./index.type";

import {
  EntityRepository
} from "@game3/data3";

import {
  CameraManager,
  ProgramRepository
} from "@game3/ren3";

import Content          from "../content/index.type";
import Settings         from "../settings/index.type";
import State            from "../state/index.type";

import EngineBrake        from "../engine_brake/index.type";

class StandardEngine implements Engine {
  public constructor(
    private gl2               : WebGL2RenderingContext,
    private cameraManager     : CameraManager,
    private content           : Content,
    private entityRepository  : EntityRepository,
    private programRepository : ProgramRepository,
    private settings          : Settings,
    private state             : State
  ) {

  }

  public getContent() : Content {
    return this.content;
  }

  public getSettings()  : Settings {
    return this.settings;
  }

  public getState() : State {
    return this.state;
  }

  public start() : EngineBrake {
    const gl2 = this.gl2;

    //--- Set up WebGL

    // Set a clear color
    gl2.clearColor(0, 0, 0, 0);

    // Turn on depth testing
    gl2.enable(gl2.DEPTH_TEST);

    // Tell webgl to cull faces
    gl2.enable(gl2.CULL_FACE);

    //--- Rendering loop

    let animationFrame : number;

    const processFrame  = () : void => {
      // Clear the canvas
      gl2.clear(
        gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT
      );

      const viewProjectionMatrix  = this.cameraManager.getActiveCameraInfo().getMatrix();

      // Draw the entities

      this.entityRepository.forEachInfo(
        (
          entityInfo
        ) : void => {
          // Get the program required for this entity
          const program = this.programRepository.getProgramWithFeatures(
            entityInfo.getFeatureRequirements()
          );

          program.execute(
            entityInfo,
            viewProjectionMatrix
          );
        }
      );

      animationFrame = window.requestAnimationFrame(
        processFrame
      );
    };

    animationFrame = window.requestAnimationFrame(
      processFrame
    );

    return () : void => {
      window.cancelAnimationFrame(
        animationFrame
      );
    };
  }
}

export default StandardEngine;
