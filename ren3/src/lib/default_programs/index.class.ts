import DefaultPrograms from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import Program                      from "../program/index.type";
import VertexArrayObjectRepository  from "../vertex_array_object_repository/index.type";

class StandardDefaultPrograms implements DefaultPrograms {
  public getDefaultPrograms(
    gl2                         : WebGL2RenderingContext,
    vertexArrayObjectRepository : VertexArrayObjectRepository
  ) : Map<FeatureRequirements, Program> {
    // TODO This
    gl2;
    vertexArrayObjectRepository;
    return new Map();
  }
}

export default StandardDefaultPrograms;
