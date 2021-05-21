import EntityFactory  from "./factory.type";
import StandardEntity from "./index.class";
import Entity         from "./index.type";

import EntityInfo from "../entity_info/index.type";

class StandardEntityFactory implements EntityFactory {
  public construct(
    entityInfo  : EntityInfo
  ) : Entity {
    return new StandardEntity(
      entityInfo
    );
  }
}

export default StandardEntityFactory;
