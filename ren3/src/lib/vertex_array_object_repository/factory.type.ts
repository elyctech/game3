import VertexArrayObjectRepository from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import VertexArrayObjectInitializer from "../vertex_array_object_initializer/index.type";

interface VertexArrayObjectRepositoryFactory {
  construct(
    gl2                           : WebGL2RenderingContext,
    vertexArrayObjects            : Map<string, Map<FeatureRequirements, WebGLVertexArrayObject>>,
    vertexArrayObjectInitializer  : VertexArrayObjectInitializer
  ) : VertexArrayObjectRepository;
}

export default VertexArrayObjectRepositoryFactory;
