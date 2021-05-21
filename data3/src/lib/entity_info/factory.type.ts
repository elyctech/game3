import EntityInfo from "./index.type";

import ModelRepository from "../model_repository/index.type";

interface EntityInfoFactory {
  construct(
    modelRepository : ModelRepository
  ) : EntityInfo;
}

export default EntityInfoFactory;
