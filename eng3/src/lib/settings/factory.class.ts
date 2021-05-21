import SettingsFactory  from "./factory.type";
import StandardSettings from "./index.class";
import Settings         from "./index.type";

import {
  CameraManager
} from "@game3/ren3";

class StandardSettingsFactory implements SettingsFactory {
  public construct(
    cameraManager : CameraManager
  ) : Settings {
    return new StandardSettings(
      cameraManager
    );
  }
}

export default StandardSettingsFactory;
