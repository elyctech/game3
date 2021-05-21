import CameraManagerFactory  from "./factory.type";
import StandardCameraManager from "./index.class";
import CameraManager         from "./index.type";

import Camera                   from "../camera/index.type";
import PerspectiveCameraFactory from "../perspective_camera/factory.type";

class StandardCameraManagerFactory implements CameraManagerFactory {
  public construct(
    cameraCache               : Map<string, Camera>,
    perspectiveCameraFactory  : PerspectiveCameraFactory
  ) : CameraManager {
    return new StandardCameraManager(
      cameraCache,
      perspectiveCameraFactory
    );
  }
}

export default StandardCameraManagerFactory;
