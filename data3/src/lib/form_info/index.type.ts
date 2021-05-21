interface FormInfo {
  getPositionBuffer() : WebGLBuffer | null;

  getVertexCount()  : number;

  setPositions(
    positions : Float32Array
  ) : void;
}

export default FormInfo;
