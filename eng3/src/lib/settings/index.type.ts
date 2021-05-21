import {
  PerspectiveCamera
} from "@game3/ren3";

interface Settings {
  acquireCamera(
    name  : string,
    type  : "perspective"
  ) : PerspectiveCamera;

  useCamera(
    name  : string
  ) : void;
}

export default Settings;
