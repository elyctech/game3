import Entity from "./index.type";

import EntityInfo from "../entity_info/index.type";

class StandardEntity implements Entity {
  public constructor(
    private info  : EntityInfo
  ) {

  }

  public setModel(
    name  : string
  ) : this {
    this.info.setModel(
      name
    );

    return this;
  }
}

export default StandardEntity;
