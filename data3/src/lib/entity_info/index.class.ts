import EntityInfo from "./index.type";

import FeatureRequirements  from "../feature_requirements/index.type";
import ModelInfo            from "../model_info/index.type";
import ModelRepository      from "../model_repository/index.type";

class StandardEntityInfo implements EntityInfo {
  private modelInfo  : ModelInfo | null = null;

  public constructor(
    private modelRepository : ModelRepository
  ) {

  }

  public getFeatureRequirements()  : FeatureRequirements {
    return 0;
  }

  public getModelInfo()  : ModelInfo | null {
    return this.modelInfo;
  }

  public setModel(
    name  : string
  ) : void {
    if (!this.modelRepository.hasModel(name)) {
      throw new Error(`Could not set model on entity info: No such form (${name}).`);
    }

    this.modelInfo = this.modelRepository.getModelInfo(name);
  }
}

export default StandardEntityInfo;
