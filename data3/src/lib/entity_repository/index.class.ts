import EntityRepository from "./index.type";

import EntityFactory      from "../entity/factory.type";
import Entity             from "../entity/index.type";
import EntityInfoFactory  from "../entity_info/factory.type";
import EntityInfo         from "../entity_info/index.type";
import ModelRepository    from "../model_repository/index.type";

class StandardEntityRepository implements EntityRepository {
  public constructor(
    // TODO EntityCache type?
    private entityCache       : Map<string, Entity>,
    private entityFactory     : EntityFactory,
    // TODO EntityInfoCache type?
    private entityInfoCache   : Map<string, EntityInfo>,
    private entityInfoFactory : EntityInfoFactory,
    private modelRepository   : ModelRepository
  ) {

  }

  public acquireEntity(
    name  : string
  ) : Entity {
    let entity = this.entityCache.get(name);

    if (!entity) {
      const entityInfo  = this.entityInfoFactory.construct(
        this.modelRepository
      );

      entity = this.entityFactory.construct(
        entityInfo
      );

      this.entityCache.set(
        name,
        entity
      );

      this.entityInfoCache.set(
        name,
        entityInfo
      );
    }

    return entity;
  }

  public forEachInfo(
    action  : (
      entityInfo  : EntityInfo
    ) => void
  ) : void {
    this.entityInfoCache.forEach(
      (entityInfo) => action(entityInfo)
    );
  }
}

export default StandardEntityRepository;
