import Model from "./index.type";

import ModelInfo from "../model_info/index.type";

interface ModelFactory {
  construct(
    info  : ModelInfo
  ) : Model;
}

export default ModelFactory;
