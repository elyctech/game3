import PerspectiveCameraFactory  from "./factory.type";
import StandardPerspectiveCamera from "./index.class";
import PerspectiveCamera         from "./index.type";

class StandardPerspectiveCameraFactory implements PerspectiveCameraFactory {
  public construct() : PerspectiveCamera {
    return new StandardPerspectiveCamera();
  }
}

export default StandardPerspectiveCameraFactory;
