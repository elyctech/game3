import VertexArrayObjectRepositoryFactory  from "./factory.type";
import StandardVertexArrayObjectRepository from "./index.class";
import VertexArrayObjectRepository         from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import VertexArrayObjectInitializer from "../vertex_array_object_initializer/index.type";

class StandardVertexArrayObjectRepositoryFactory implements VertexArrayObjectRepositoryFactory {
  public construct(
    gl2                           : WebGL2RenderingContext,
    vertexArrayObjects            : Map<string, Map<FeatureRequirements, WebGLVertexArrayObject>>,
    vertexArrayObjectInitializer  : VertexArrayObjectInitializer
  ) : VertexArrayObjectRepository {
    return new StandardVertexArrayObjectRepository(
      gl2,
      vertexArrayObjects,
      vertexArrayObjectInitializer
    );
  }
}

export default StandardVertexArrayObjectRepositoryFactory;
