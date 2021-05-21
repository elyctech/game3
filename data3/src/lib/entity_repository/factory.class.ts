import EntityRepositoryFactory  from "./factory.type";
import StandardEntityRepository from "./index.class";
import EntityRepository         from "./index.type";

import EntityFactory      from "../entity/factory.type";
import Entity             from "../entity/index.type";
import EntityInfoFactory  from "../entity_info/factory.type";
import EntityInfo         from "../entity_info/index.type";
import ModelRepository    from "../model_repository/index.type";

class StandardEntityRepositoryFactory implements EntityRepositoryFactory {
  public construct(
    entityCache       : Map<string, Entity>,
    entityFactory     : EntityFactory,
    entityInfoCache   : Map<string, EntityInfo>,
    entityInfoFactory : EntityInfoFactory,
    modelRepository   : ModelRepository
  ) : EntityRepository {
    return new StandardEntityRepository(
      entityCache,
      entityFactory,
      entityInfoCache,
      entityInfoFactory,
      modelRepository
    );
  }
}

export default StandardEntityRepositoryFactory;
