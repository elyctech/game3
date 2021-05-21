import VertexArrayObjectInitializerFactory  from "./factory.type";
import StandardVertexArrayObjectInitializer from "./index.class";
import VertexArrayObjectInitializer         from "./index.type";

class StandardVertexArrayObjectInitializerFactory implements VertexArrayObjectInitializerFactory {
  public construct(
    gl2 : WebGL2RenderingContext
  ) : VertexArrayObjectInitializer {
    return new StandardVertexArrayObjectInitializer(
      gl2
    );
  }
}

export default StandardVertexArrayObjectInitializerFactory;
