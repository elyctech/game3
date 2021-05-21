import modelServiceFactory from "./factory";

import modelFactory           from "../model/factory";
import modelInfoFactory       from "../model_info/factory";
import modelRepositoryFactory from "../model_repository/factory";

const modelService = modelServiceFactory.construct(
  modelFactory,
  modelInfoFactory,
  modelRepositoryFactory
);

export default modelService;
