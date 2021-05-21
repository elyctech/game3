import {
  EntityInfo
} from "@game3/data3";

import {
  Matrix
} from "@game3/util3";

interface Program {
  execute(
    entityInfo            : EntityInfo,
    viewProjectionMatrix  : Matrix
  ) : void;
}

export default Program;
