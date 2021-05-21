import EntityInfoFactory  from "./factory.type";
import StandardEntityInfo from "./index.class";
import EntityInfo         from "./index.type";

import ModelRepository from "../model_repository/index.type";

class StandardEntityInfoFactory implements EntityInfoFactory {
  public construct(
    modelRepository : ModelRepository
  ) : EntityInfo {
    return new StandardEntityInfo(
      modelRepository
    );
  }
}

export default StandardEntityInfoFactory;
