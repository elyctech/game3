import ModelInfo from "./index.type";

import FormInfo       from "../form_info/index.type";
import FormRepository from "../form_repository/index.type";

class StandardModelInfo implements ModelInfo {
  private formInfo  : FormInfo | null = null;

  public constructor(
    private formRepository  : FormRepository,
    private name            : string
  ) {

  }

  public getFormInfo() : FormInfo | null {
    return this.formInfo;
  }

  public getName() : string {
    return this.name;
  }

  public setForm(
    name  : string
  ) : void {
    if (!this.formRepository.hasForm(name)) {
      throw new Error(`Could not set form on model info: No such form (${name}).`);
    }

    this.formInfo = this.formRepository.getFormInfo(name);
  }
}

export default StandardModelInfo;
