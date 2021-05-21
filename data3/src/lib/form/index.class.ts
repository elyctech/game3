import Form from "./index.type";

import FormInfo from "../form_info/index.type";

class StandardForm implements Form {
  public constructor(
    private info  : FormInfo
  ) {

  }

  public setPositions(
    positions : Float32Array
  ) : this {
    this.info.setPositions(
      positions
    );

    return this;
  }
}

export default StandardForm;
