import ModelFactory  from "./factory.type";
import StandardModel from "./index.class";
import Model         from "./index.type";

import ModelInfo from "../model_info/index.type";

class StandardModelFactory implements ModelFactory {
  public construct(
    info  : ModelInfo
  ) : Model {
    return new StandardModel(
      info
    );
  }
}

export default StandardModelFactory;
