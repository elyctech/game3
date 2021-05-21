import ModelRepositoryFactory  from "./factory.type";
import StandardModelRepository from "./index.class";
import ModelRepository         from "./index.type";

import FormRepository   from "../form_repository/index.type";
import ModelFactory     from "../model/factory.type";
import Model            from "../model/index.type";
import ModelInfoFactory from "../model_info/factory.type";
import ModelInfo        from "../model_info/index.type";

class StandardModelRepositoryFactory implements ModelRepositoryFactory {
  public construct(
    formRepository    : FormRepository,
    modelCache        : Map<string, Model>,
    modelFactory      : ModelFactory,
    modelInfoCache    : Map<string, ModelInfo>,
    modelInfoFactory  : ModelInfoFactory
  ) : ModelRepository {
    return new StandardModelRepository(
      formRepository,
      modelCache,
      modelFactory,
      modelInfoCache,
      modelInfoFactory
    );
  }
}

export default StandardModelRepositoryFactory;
