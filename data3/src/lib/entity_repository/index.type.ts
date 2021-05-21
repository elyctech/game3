import Entity     from "../entity/index.type";
import EntityInfo from "../entity_info/index.type";

interface EntityRepository {
  acquireEntity(
    name  : string
  ) : Entity;

  forEachInfo(
    action  : (
      entityInfo  : EntityInfo
    ) => void
  ) : void;
}

export default EntityRepository;
