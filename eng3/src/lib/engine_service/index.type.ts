import Engine from "../engine/index.type";

interface EngineService {
  createEngine(
    gl2 : WebGL2RenderingContext
  ) : Engine;
}

export default EngineService;
