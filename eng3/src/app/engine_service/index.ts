import engineServiceFactory from "./factory";

import {
  entityService,
  formService,
  modelService
} from "@game3/data3";

import {
  cameraManager,
  programService
} from "@game3/ren3";

import contentFactory   from "../content/factory";
import settingsFactory  from "../settings/factory";
import stateFactory     from "../state/factory";
import engineFactory    from "../engine/factory";

const engineService = engineServiceFactory.construct(
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

export default engineService;
