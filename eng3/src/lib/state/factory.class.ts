import StateFactory  from "./factory.type";
import StandardState from "./index.class";
import State         from "./index.type";

import {
  EntityRepository
} from "@game3/data3";

class StandardStateFactory implements StateFactory {
  public construct(
    entityRepository  : EntityRepository
  ) : State {
    return new StandardState(
      entityRepository
    );
  }
}

export default StandardStateFactory;
