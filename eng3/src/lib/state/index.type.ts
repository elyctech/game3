import {
  Entity
} from "@game3/data3";

interface State {
  acquireEntity(
    name  : string
  ) : Entity;
}

export default State;
