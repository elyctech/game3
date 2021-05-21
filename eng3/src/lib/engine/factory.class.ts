import EngineFactory  from "./factory.type";
import StandardEngine from "./index.class";
import Engine         from "./index.type";

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

class StandardEngineFactory implements EngineFactory {
  public construct(
    gl2               : WebGL2RenderingContext,
    cameraManager     : CameraManager,
    content           : Content,
    entityRepository  : EntityRepository,
    programRepository : ProgramRepository,
    settings          : Settings,
    state             : State
  ) : Engine {
    return new StandardEngine(
      gl2,
      cameraManager,
      content,
      entityRepository,
      programRepository,
      settings,
      state
    );
  }
}

export default StandardEngineFactory;
