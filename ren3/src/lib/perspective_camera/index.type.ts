interface PerspectiveCamera {
  setFar(
    far : number
  ) : this;

  setFieldOfView(
    fieldOfView : number
  ) : this;

  setNear(
    near  : number
  ) : this;

  setLocation(
    x : number,
    y : number,
    z : number
  ) : this;
}

export default PerspectiveCamera;
