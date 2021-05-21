import EntityRepository from "../entity_repository/index.type";
import ModelRepository  from "../model_repository/index.type";

interface EntityService {
  createEntityRepository(
    modelRepository : ModelRepository
  )  : EntityRepository;
}

export default EntityService;
