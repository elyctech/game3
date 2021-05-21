import Settings from "./index.type";

import {
  CameraManager,
  CameraType,
  PerspectiveCamera
} from "@game3/ren3";

class StandardSettings implements Settings {
  public constructor(
    private cameraManager : CameraManager
  ) {

  }

  public acquireCamera(
    name  : string,
    type  : CameraType
  ) : PerspectiveCamera {
    return this.cameraManager.acquireCamera(
      name,
      type
    );
  }

  public useCamera(
    name  : string
  ) : void {
    this.cameraManager.setActiveCamera(
      name
    );
  }
}

export default StandardSettings;
