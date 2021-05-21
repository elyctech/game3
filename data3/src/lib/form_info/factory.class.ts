import FormInfoFactory  from "./factory.type";
import StandardFormInfo from "./index.class";
import FormInfo         from "./index.type";

class StandardFormInfoFactory implements FormInfoFactory {
  public construct(
    gl2 : WebGL2RenderingContext
  ) : FormInfo {
    return new StandardFormInfo(
      gl2
    );
  }
}

export default StandardFormInfoFactory;
