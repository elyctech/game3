import CameraManager from "./index.type";

import Camera                   from "../camera/index.type";
import PerspectiveCameraFactory from "../perspective_camera/factory.type";

interface CameraManagerFactory {
  construct(
    cameraCache               : Map<string, Camera>,
    perspectiveCameraFactory  : PerspectiveCameraFactory
  ) : CameraManager;
}

export default CameraManagerFactory;
