import ProgramService from "./index.type";

import DefaultPrograms                      from "../default_programs/index.type";
import ProgramFeatureMask                   from "../program_feature_mask/index.type";
import ProgramRepositoryFactory             from "../program_repository/factory.type";
import ProgramRepository                    from "../program_repository/index.type";
import VertexArrayObjectRepositoryFactory   from "../vertex_array_object_repository/factory.type";
import VertexArrayObjectInitializerFactory  from "../vertex_array_object_initializer/factory.type";

class StandardProgramService implements ProgramService {
  public constructor(
    private defaultPrograms                     : DefaultPrograms,
    private programFeatureMask                  : ProgramFeatureMask,
    private programRepositoryFactory            : ProgramRepositoryFactory,
    private vertexArrayObjectInitializerFactory : VertexArrayObjectInitializerFactory,
    private vertexArrayObjectRepositoryFactory  : VertexArrayObjectRepositoryFactory
  ) {

  }

  public createProgramRepository(
    gl2 : WebGL2RenderingContext
  ) : ProgramRepository {
    return this.programRepositoryFactory.construct(
      this.defaultPrograms.getDefaultPrograms(
        gl2,
        this.vertexArrayObjectRepositoryFactory.construct(
          gl2,
          new Map(),
          this.vertexArrayObjectInitializerFactory.construct(
            gl2
          )
        )
      ),
      this.programFeatureMask
    );
  }
}

export default StandardProgramService;
