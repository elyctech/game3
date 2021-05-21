import Entity from "./index.type";

import EntityInfo from "../entity_info/index.type";

interface EntityFactory {
  construct(
    entityInfo  : EntityInfo
  ) : Entity;
}

export default EntityFactory;
