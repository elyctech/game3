import EntityRepository from "./index.type";

import EntityFactory      from "../entity/factory.type";
import Entity             from "../entity/index.type";
import EntityInfoFactory  from "../entity_info/factory.type";
import EntityInfo         from "../entity_info/index.type";
import ModelRepository    from "../model_repository/index.type";

interface EntityRepositoryFactory {
  construct(
    entityCache       : Map<string, Entity>,
    entityFactory     : EntityFactory,
    entityInfoCache   : Map<string, EntityInfo>,
    entityInfoFactory : EntityInfoFactory,
    modelRepository   : ModelRepository
  ) : EntityRepository;
}

export default EntityRepositoryFactory;
