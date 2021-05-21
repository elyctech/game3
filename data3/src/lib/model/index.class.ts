import Model from "./index.type";

import ModelInfo from "../model_info/index.type";

class StandardModel implements Model {
  public constructor(
    private info  : ModelInfo
  ) {

  }

  public setForm(
    name  : string
  ) : this {
    this.info.setForm(
      name
    );

    return this;
  }
}

export default StandardModel;
