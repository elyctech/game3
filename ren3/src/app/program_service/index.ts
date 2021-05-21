import programServiceFactory from "./factory";

import defaultPrograms                      from "../default_programs";
import programFeatureMask                   from "../program_feature_mask";
import programRepositoryFactory             from "../program_repository/factory";
import vertexArrayObjectInitializerFactory  from "../vertex_array_object_initializer/factory";
import vertexArrayObjectRepositoryFactory   from "../vertex_array_object_repository/factory";

const programService = programServiceFactory.construct(
  defaultPrograms,
  programFeatureMask,
  programRepositoryFactory,
  vertexArrayObjectInitializerFactory,
  vertexArrayObjectRepositoryFactory
);

export default programService;
