import EngineServiceFactory  from "./factory.type";
import StandardEngineService from "./index.class";
import EngineService         from "./index.type";

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

class StandardEngineServiceFactory implements EngineServiceFactory {
  public construct(
    cameraManager             : CameraManager,
    contentFactory            : ContentFactory,
    engineFactory             : EngineFactory,
    entityService             : EntityService,
    formService               : FormService,
    modelService              : ModelService,
    programService            : ProgramService,
    settingsFactory           : SettingsFactory,
    stateFactory              : StateFactory
  ) : EngineService {
    return new StandardEngineService(
      cameraManager,
      contentFactory,
      engineFactory,
      entityService,
      formService,
      modelService,
      programService,
      settingsFactory,
      stateFactory
    );
  }
}

export default StandardEngineServiceFactory;
