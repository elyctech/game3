import ProgramService from "./index.type";

import DefaultPrograms                      from "../default_programs/index.type";
import ProgramFeatureMask                   from "../program_feature_mask/index.type";
import ProgramRepositoryFactory             from "../program_repository/factory.type";
import VertexArrayObjectRepositoryFactory   from "../vertex_array_object_repository/factory.type";
import VertexArrayObjectInitializerFactory  from "../vertex_array_object_initializer/factory.type";

interface ProgramServiceFactory {
  construct(
    defaultPrograms                     : DefaultPrograms,
    programFeatureMask                  : ProgramFeatureMask,
    programRepositoryFactory            : ProgramRepositoryFactory,
    vertexArrayObjectInitializerFactory : VertexArrayObjectInitializerFactory,
    vertexArrayObjectRepositoryFactory  : VertexArrayObjectRepositoryFactory
  ) : ProgramService;
}

export default ProgramServiceFactory;
