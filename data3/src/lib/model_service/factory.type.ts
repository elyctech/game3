import ModelService from "./index.type";

import ModelFactory           from "../model/factory.type";
import ModelInfoFactory       from "../model_info/factory.type";
import ModelRepositoryFactory from "../model_repository/factory.type";

interface ModelServiceFactory {
  construct(
    modelFactory            : ModelFactory,
    modelInfoFactory        : ModelInfoFactory,
    modelRepositoryFactory  : ModelRepositoryFactory
  ) : ModelService;
}

export default ModelServiceFactory;
