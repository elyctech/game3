import PerspectiveCamera from "./index.type";

class StandardPerspectiveCamera implements PerspectiveCamera {
  public setFar(
    far : number
  ) : this {
    // TODO CameraInfo
    far;

    return this;
  }

  public setFieldOfView(
    fieldOfView : number
  ) : this {
    // TODO CameraInfo
    fieldOfView;

    return this;
  }

  public setNear(
    near  : number
  ) : this {
    // TODO CameraInfo
    near;

    return this;
  }

  public setLocation(
    x : number,
    y : number,
    z : number
  ) : this {
    // TODO CameraInfo
    x;
    y;
    z;

    return this;
  }
}

export default StandardPerspectiveCamera;
