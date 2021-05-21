import cameraManagerFactory from "./factory";

import perspectiveCameraFactory from "../perspective_camera/factory";

const cameraManager = cameraManagerFactory.construct(
  new Map(),
  perspectiveCameraFactory
);

export default cameraManager;
