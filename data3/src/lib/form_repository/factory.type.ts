import FormRepository from "./index.type";

import Form             from "../form/index.type";
import FormFactory      from "../form/factory.type";
import FormInfo         from "../form_info/index.type";
import FormInfoFactory  from "../form_info/factory.type";

interface FormRepositoryFactory {
  construct(
    gl2             : WebGL2RenderingContext,
    formCache       : Map<string, Form>,
    formFactory     : FormFactory,
    formInfoCache   : Map<string, FormInfo>,
    formInfoFactory : FormInfoFactory
  ) : FormRepository;
}

export default FormRepositoryFactory;
