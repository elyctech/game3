import ModelServiceFactory  from "./factory.type";
import StandardModelService from "./index.class";
import ModelService         from "./index.type";

import ModelFactory           from "../model/factory.type";
import ModelInfoFactory       from "../model_info/factory.type";
import ModelRepositoryFactory from "../model_repository/factory.type";

class StandardModelServiceFactory implements ModelServiceFactory {
  public construct(
    modelFactory            : ModelFactory,
    modelInfoFactory        : ModelInfoFactory,
    modelRepositoryFactory  : ModelRepositoryFactory
  ) : ModelService {
    return new StandardModelService(
      modelFactory,
      modelInfoFactory,
      modelRepositoryFactory
    );
  }
}

export default StandardModelServiceFactory;
