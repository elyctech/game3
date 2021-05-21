import Model      from "../model/index.type";
import ModelInfo  from "../model_info/index.type";

interface ModelRepository {
  acquireModel(
    name  : string
  ) : Model;

  hasModel(
    name  : string
  ) : boolean;

  getModelInfo(
    name  : string
  ) : ModelInfo;
}

export default ModelRepository;
