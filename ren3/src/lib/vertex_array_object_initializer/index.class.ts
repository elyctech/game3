import VertexArrayObjectInitializer from "./index.type";

import {
  EntityInfo
} from "@game3/data3";

import AttributeLocations from "../attribute_locations/index.type";

class StandardVertexArrayObjectInitializer implements VertexArrayObjectInitializer {
  public constructor(
    private gl2 : WebGL2RenderingContext
  ) {

  }

  public initializeVaoForEntity(
    vertexArrayObject : WebGLVertexArrayObject,
    entityInfo        : EntityInfo
  ) : void {
    const modelInfo = entityInfo.getModelInfo();

    if (!modelInfo) {
      // TODO Check errors for consistent tense.
      throw new Error("Cannot initialize VAO for entity: Entity has not been assigned a model.");
    }

    const formInfo  = modelInfo.getFormInfo();

    if (!formInfo) {
      throw new Error("Cannot initialize VAO for entity: Entity's model has not been assigned a form.");
    }

    // Positions are always necessary
    this.gl2.bindVertexArray(vertexArrayObject);

    // Bind the form position buffer
    const positionBuffer  = formInfo.getPositionBuffer();

    if (!positionBuffer) {
      throw new Error("Cannot initialize VAO for entity: Entity's form has not been assigned positions.");
    }

    this.gl2.bindBuffer(this.gl2.ARRAY_BUFFER, positionBuffer);

    // Tell WebGL we want to pull data from a buffer versus just a constant value
    this.gl2.enableVertexAttribArray(AttributeLocations.a_position);

    // Explain the data layout
    this.gl2.vertexAttribPointer(
      AttributeLocations.a_position,  // The attribute to link to the current bound buffer
      3,                              // Three components per vertex from the buffered data
      this.gl2.FLOAT,                 // The data in the buffer consists of floats
      false,                          // Whether or not to normalize the data; this does nothing for floats nor do we want it to
      0,                              // The number of components to skip over per iteration
      0                               // The starting point in the buffer
    );

    this.gl2.bindBuffer(this.gl2.ARRAY_BUFFER, null);
    this.gl2.bindVertexArray(null);
  }
}

export default StandardVertexArrayObjectInitializer;
