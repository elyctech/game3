import FormRepositoryFactory  from "./factory.type";
import StandardFormRepository from "./index.class";
import FormRepository         from "./index.type";

import Form             from "../form/index.type";
import FormFactory      from "../form/factory.type";
import FormInfo         from "../form_info/index.type";
import FormInfoFactory  from "../form_info/factory.type";

class StandardFormRepositoryFactory implements FormRepositoryFactory {
  public construct(
    gl2             : WebGL2RenderingContext,
    formCache       : Map<string, Form>,
    formFactory     : FormFactory,
    formInfoCache   : Map<string, FormInfo>,
    formInfoFactory : FormInfoFactory
  ) : FormRepository {
    return new StandardFormRepository(
      gl2,
      formCache,
      formFactory,
      formInfoCache,
      formInfoFactory
    );
  }
}

export default StandardFormRepositoryFactory;
