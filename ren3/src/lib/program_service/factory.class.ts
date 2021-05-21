import ProgramServiceFactory  from "./factory.type";
import StandardProgramService from "./index.class";
import ProgramService         from "./index.type";

import DefaultPrograms                      from "../default_programs/index.type";
import ProgramFeatureMask                   from "../program_feature_mask/index.type";
import ProgramRepositoryFactory             from "../program_repository/factory.type";
import VertexArrayObjectRepositoryFactory   from "../vertex_array_object_repository/factory.type";
import VertexArrayObjectInitializerFactory  from "../vertex_array_object_initializer/factory.type";

class StandardProgramServiceFactory implements ProgramServiceFactory {
  public construct(
    defaultPrograms                     : DefaultPrograms,
    programFeatureMask                  : ProgramFeatureMask,
    programRepositoryFactory            : ProgramRepositoryFactory,
    vertexArrayObjectInitializerFactory : VertexArrayObjectInitializerFactory,
    vertexArrayObjectRepositoryFactory  : VertexArrayObjectRepositoryFactory
  ) : ProgramService {
    return new StandardProgramService(
      defaultPrograms,
      programFeatureMask,
      programRepositoryFactory,
      vertexArrayObjectInitializerFactory,
      vertexArrayObjectRepositoryFactory
    );
  }
}

export default StandardProgramServiceFactory;
