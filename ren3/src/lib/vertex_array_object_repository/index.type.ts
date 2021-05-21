import {
  EntityInfo
} from "@game3/data3";

interface VertexArrayObjectRepository {
  getVaoForEntity(
    entityInfo  : EntityInfo
  ) : WebGLVertexArrayObject;
}

export default VertexArrayObjectRepository;
