import ModelInfoFactory  from "./factory.type";
import StandardModelInfo from "./index.class";
import ModelInfo         from "./index.type";

import FormRepository from "../form_repository/index.type";

class StandardModelInfoFactory implements ModelInfoFactory {
  public construct(
    formRepository  : FormRepository,
    name            : string
  ) : ModelInfo {
    return new StandardModelInfo(
      formRepository,
      name
    );
  }
}

export default StandardModelInfoFactory;
