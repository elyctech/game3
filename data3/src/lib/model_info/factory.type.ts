import ModelInfo from "./index.type";

import FormRepository from "../form_repository/index.type";

interface ModelInfoFactory {
  construct(
    formRepository  : FormRepository,
    name            : string
  ) : ModelInfo;
}

export default ModelInfoFactory;
