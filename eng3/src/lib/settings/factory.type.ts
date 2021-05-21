import Settings from "./index.type";

import {
  CameraManager
} from "@game3/ren3";

interface SettingsFactory {
  construct(
    cameraManager : CameraManager
  ) : Settings;
}

export default SettingsFactory;
