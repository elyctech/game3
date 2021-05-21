import FeatureRequirements  from "../feature_requirements/index.type";
import ModelInfo            from "../model_info/index.type";

interface EntityInfo {
  getFeatureRequirements()  : FeatureRequirements;

  getModelInfo()  : ModelInfo | null;

  setModel(
    name  : string
  ) : void;
}

export default EntityInfo;
