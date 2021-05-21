import ModelService from "./index.type";

import FormRepository         from "../form_repository/index.type";
import ModelFactory           from "../model/factory.type";
import ModelInfoFactory       from "../model_info/factory.type";
import ModelRepositoryFactory from "../model_repository/factory.type";
import ModelRepository        from "../model_repository/index.type";

class StandardModelService implements ModelService {
  public constructor(
    private modelFactory            : ModelFactory,
    private modelInfoFactory        : ModelInfoFactory,
    private modelRepositoryFactory  : ModelRepositoryFactory
  ) {

  }

  public createModelRepository(
    formRepository  : FormRepository
  ) : ModelRepository {
    return this.modelRepositoryFactory.construct(
      formRepository,
      new Map(),
      this.modelFactory,
      new Map(),
      this.modelInfoFactory
    );
  }
}

export default StandardModelService;
