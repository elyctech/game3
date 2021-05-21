import FormService from "./index.type";

import FormFactory            from "../form/factory.type";
import FormInfoFactory        from "../form_info/factory.type";
import FormRepositoryFactory  from "../form_repository/factory.type";

interface FormServiceFactory {
  construct(
    formFactory           : FormFactory,
    formInfoFactory       : FormInfoFactory,
    formRepositoryFactory : FormRepositoryFactory
  ) : FormService;
}

export default FormServiceFactory;