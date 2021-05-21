import EngineService from "./index.type";

import {
  EntityService,
  FormService,
  ModelService
} from "@game3/data3";

import {
  CameraManager,
  ProgramService
} from "@game3/ren3";

import ContentFactory   from "../content/factory.type";
import SettingsFactory  from "../settings/factory.type";
import StateFactory     from "../state/factory.type";
import EngineFactory    from "../engine/factory.type";

interface EngineServiceFactory {
  construct(
    cameraManager             : CameraManager,
    contentFactory            : ContentFactory,
    engineFactory             : EngineFactory,
    entityService             : EntityService,
    formService               : FormService,
    modelService              : ModelService,
    programService            : ProgramService,
    settingsFactory           : SettingsFactory,
    stateFactory              : StateFactory
  ) : EngineService;
}

export default EngineServiceFactory;
