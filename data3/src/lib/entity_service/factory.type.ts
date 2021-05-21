import EntityService from "./index.type";

import EntityFactory            from "../entity/factory.type";
import EntityInfoFactory        from "../entity_info/factory.type";
import EntityRepositoryFactory  from "../entity_repository/factory.type";

interface EntityServiceFactory {
  construct(
    entityFactory           : EntityFactory,
    entityInfoFactory       : EntityInfoFactory,
    entityRepositoryFactory : EntityRepositoryFactory
  ) : EntityService;
}

export default EntityServiceFactory;
