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

interface EngineFactory {
  construct(
    gl2               : WebGL2RenderingContext,
    cameraManager     : CameraManager,
    content           : Content,
    entityRepository  : EntityRepository,
    programRepository : ProgramRepository,
    settings          : Settings,
    state             : State
  ) : Engine;
}

export default EngineFactory;
