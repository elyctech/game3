import {
  FeatureRequirements
} from "@game3/data3";

import Program                      from "../program/index.type";
import VertexArrayObjectRepository  from "../vertex_array_object_repository/index.type";

interface DefaultPrograms {
  getDefaultPrograms(
    gl2                         : WebGL2RenderingContext,
    vertexArrayObjectRepository : VertexArrayObjectRepository
  ) : Map<FeatureRequirements, Program>;
}

export default DefaultPrograms;
