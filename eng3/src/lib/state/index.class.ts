import State  from "./index.type";

import {
  Entity,
  EntityRepository
} from "@game3/data3";

class StandardState implements State {
  public constructor(
    private entityRepository  : EntityRepository
  ) {

  }

  public acquireEntity(
    name  : string
  ) : Entity {
    return this.entityRepository.acquireEntity(
      name
    );
  }
}

export default StandardState;
