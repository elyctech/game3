import VertexArrayObjectInitializer from "./index.type";

interface VertexArrayObjectInitializerFactory {
  construct(
    gl2 : WebGL2RenderingContext
  ) : VertexArrayObjectInitializer;
}

export default VertexArrayObjectInitializerFactory;
