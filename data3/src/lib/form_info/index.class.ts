import FormInfo from "./index.type";

class StandardFormInfo implements FormInfo {
  private vertexCount = 0;

  private positionBuffer  : WebGLBuffer | null = null;

  public constructor(
    private gl2 : WebGL2RenderingContext
  ) {

  }

  public getPositionBuffer() : WebGLBuffer | null {
    return this.positionBuffer;
  }

  public getVertexCount()  : number {
    return this.vertexCount;
  }

  public setPositions(
    positions : Float32Array
  ) : void {
    if (!this.positionBuffer) {
      this.positionBuffer = this.gl2.createBuffer();

      if (!this.positionBuffer) {
        throw new Error("Could not set positions on form: Could not create WebGL Buffer.");
      }
    }

    this.gl2.bindBuffer(
      this.gl2.ARRAY_BUFFER,
      this.positionBuffer
    );

    this.gl2.bufferData(
      this.gl2.ARRAY_BUFFER,
      positions,
      this.gl2.STATIC_DRAW
    );

    this.gl2.bindBuffer(
      this.gl2.ARRAY_BUFFER,
      null
    );

    this.vertexCount  = Math.floor(positions.length / 3);
  }
}

export default StandardFormInfo;
