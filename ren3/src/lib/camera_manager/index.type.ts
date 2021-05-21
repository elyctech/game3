import CameraInfo         from "../camera_info/index.type";
import CameraType         from "../camera_type/index.type";
import PerspectiveCamera  from "../perspective_camera/index.type";

interface CameraManager {
  acquireCamera(
    name : string,
    type : "perspective"
  ) : PerspectiveCamera;

  acquireCamera(
    name  : string,
    type  : CameraType
  ) : any;

  getActiveCameraInfo() : CameraInfo;

  setActiveCamera(
    name  : string
  ) : void;
}

export default CameraManager;
