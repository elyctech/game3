import ModelRepository from "../model_repository/index.type";

import FormRepository from "../form_repository/index.type";

interface ModelService {
  createModelRepository(
    formRepository  : FormRepository
  ) : ModelRepository;
}

export default ModelService;
