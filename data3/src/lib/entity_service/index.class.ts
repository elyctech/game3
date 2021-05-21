import EntityService from "./index.type";

import EntityFactory            from "../entity/factory.type";
import EntityInfoFactory        from "../entity_info/factory.type";
import EntityRepositoryFactory  from "../entity_repository/factory.type";
import EntityRepository         from "../entity_repository/index.type";
import ModelRepository          from "../model_repository/index.type";

class StandardEntityService implements EntityService {
  public constructor(
    private entityFactory           : EntityFactory,
    private entityInfoFactory       : EntityInfoFactory,
    private entityRepositoryFactory : EntityRepositoryFactory
  ) {

  }

  public createEntityRepository(
    modelRepository : ModelRepository
  )  : EntityRepository {
    return this.entityRepositoryFactory.construct(
      new Map(),
      this.entityFactory,
      new Map(),
      this.entityInfoFactory,
      modelRepository
    );
  }
}

export default StandardEntityService;
