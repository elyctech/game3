import FormServiceFactory  from "./factory.type";
import StandardFormService from "./index.class";
import FormService         from "./index.type";

import FormFactory            from "../form/factory.type";
import FormInfoFactory        from "../form_info/factory.type";
import FormRepositoryFactory  from "../form_repository/factory.type";

class StandardFormServiceFactory implements FormServiceFactory {
  public construct(
    formFactory           : FormFactory,
    formInfoFactory       : FormInfoFactory,
    formRepositoryFactory : FormRepositoryFactory
  ) : FormService {
    return new StandardFormService(
      formFactory,
      formInfoFactory,
      formRepositoryFactory
    );
  }
}

export default StandardFormServiceFactory;
