import VertexArrayObjectRepository from "./index.type";

import {
  EntityInfo,
  FeatureRequirements
} from "@game3/data3";

import VertexArrayObjectInitializer from "../vertex_array_object_initializer/index.type";

class StandardVertexArrayObjectRepository implements VertexArrayObjectRepository {
  public constructor(
    private gl2                           : WebGL2RenderingContext,
    private vertexArrayObjects            : Map<string, Map<FeatureRequirements, WebGLVertexArrayObject>>,
    private vertexArrayObjectInitializer  : VertexArrayObjectInitializer
  ) {

  }

  public getVaoForEntity(
    entityInfo  : EntityInfo
  ) : WebGLVertexArrayObject {
    const model = entityInfo.getModelInfo()?.getName();

    if (!model) {
      throw new Error("Cannot get VAO for entity: Entity has not been assigned a model.");
    }

    const featureRequirements  = entityInfo.getFeatureRequirements();

    let modelVaos = this.vertexArrayObjects.get(model);

    if (!modelVaos) {
      modelVaos = new Map();

      this.vertexArrayObjects.set(model, modelVaos);
    }

    let featureVao  = modelVaos.get(featureRequirements);

    if (!featureVao) {
      featureVao = this.gl2.createVertexArray() ?? undefined;

      if (!featureVao) {
        throw new Error("Cannot get VAO for entity: VAO creation failed.");
      }

      this.vertexArrayObjectInitializer.initializeVaoForEntity(
        featureVao,
        entityInfo
      );

      modelVaos.set(featureRequirements, featureVao);
    }

    return featureVao;
  }
}

export default StandardVertexArrayObjectRepository;
