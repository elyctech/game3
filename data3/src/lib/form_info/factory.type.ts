import FormInfo from "./index.type";

interface FormInfoFactory {
  construct(
    gl2 : WebGL2RenderingContext
  ) : FormInfo;
}

export default FormInfoFactory;
