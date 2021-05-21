import CameraManager  from "./index.type";

import Camera                   from "../camera/index.type";
import CameraInfo               from "../camera_info/index.type";
import CameraType               from "../camera_type/index.type";
import PerspectiveCameraFactory from "../perspective_camera/factory.type";
import PerspectiveCamera        from "../perspective_camera/index.type";

class StandardCameraManager implements CameraManager {
  private activeCameraName  = "";

  public constructor(
    // TODO Camera cache?
    private cameraCache               : Map<string, Camera>,
    private perspectiveCameraFactory  : PerspectiveCameraFactory
  ) {

  }

  public acquireCamera(
    name : string,
    type : "perspective"
  ) : PerspectiveCamera;

  public acquireCamera(
    name  : string,
    type  : CameraType
  ) : any {
    let camera = this.cameraCache.get(name);

    if (!camera) {
      if (type === "perspective") {
        camera = this.perspectiveCameraFactory.construct();
      } else {
        throw new Error(`Unable to acquire camera: Unsupported camera type (${type}).`);
      }

      this.cameraCache.set(
        name,
        camera
      );
    }

    return camera;
  }

  public getActiveCameraInfo()  : CameraInfo {
    this.activeCameraName;
    return {
      getMatrix() {
        return {
          blah() {/* No-op */}
        };
      }
    };
  }

  public setActiveCamera(
    name  : string
  ) : void {
    this.activeCameraName = name;
  }
}

export default StandardCameraManager;
