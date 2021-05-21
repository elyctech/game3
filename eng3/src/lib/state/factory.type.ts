import State from "./index.type";

import {
  EntityRepository
} from "@game3/data3";

interface StateFactory {
  construct(
    entityRepository  : EntityRepository
  ) : State;
}

export default StateFactory;
