import {
  EntityInfo
} from "@game3/data3";

interface VertexArrayObjectInitializer {
  initializeVaoForEntity(
    vertexArrayObject : WebGLVertexArrayObject,
    entityInfo        : EntityInfo
  ) : void;
}

export default VertexArrayObjectInitializer;
