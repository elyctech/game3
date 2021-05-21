import EntityServiceFactory  from "./factory.type";
import StandardEntityService from "./index.class";
import EntityService         from "./index.type";

import EntityFactory            from "../entity/factory.type";
import EntityInfoFactory        from "../entity_info/factory.type";
import EntityRepositoryFactory  from "../entity_repository/factory.type";

class StandardEntityServiceFactory implements EntityServiceFactory {
  public construct(
    entityFactory           : EntityFactory,
    entityInfoFactory       : EntityInfoFactory,
    entityRepositoryFactory : EntityRepositoryFactory
  ) : EntityService {
    return new StandardEntityService(
      entityFactory,
      entityInfoFactory,
      entityRepositoryFactory
    );
  }
}

export default StandardEntityServiceFactory;
