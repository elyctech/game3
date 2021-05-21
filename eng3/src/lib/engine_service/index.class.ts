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
import Engine           from "../engine/index.type";

class StandardEngineService implements EngineService {
  public constructor(
    private cameraManager             : CameraManager,
    private contentFactory            : ContentFactory,
    private engineFactory             : EngineFactory,
    private entityService             : EntityService,
    private formService               : FormService,
    private modelService              : ModelService,
    private programService            : ProgramService,
    private settingsFactory           : SettingsFactory,
    private stateFactory              : StateFactory
  ) {

  }

  public createEngine(
    gl2 : WebGL2RenderingContext
  ) : Engine {
    // Create supporting objects
    const formRepository  = this.formService.createFormRepository(
      gl2
    );

    const modelRepository = this.modelService.createModelRepository(
      formRepository
    );

    const entityRepository  = this.entityService.createEntityRepository(
      modelRepository
    );

    const programRepository = this.programService.createProgramRepository();

    // Create primary API objects
    const content = this.contentFactory.construct(
      formRepository,
      modelRepository
    );

    const settings = this.settingsFactory.construct(
      this.cameraManager
    );

    const state = this.stateFactory.construct(
      entityRepository
    );

    // Create engine
    return this.engineFactory.construct(
      gl2,
      this.cameraManager,
      content,
      entityRepository,
      programRepository,
      settings,
      state
    );
  }
}

export default StandardEngineService;
