import formServiceFactory from "./factory";

import formFactory            from "../form/factory";
import formInfoFactory        from "../form_info/factory";
import formRepositoryFactory  from "../form_repository/factory";

const formService = formServiceFactory.construct(
  formFactory,
  formInfoFactory,
  formRepositoryFactory
);

export default formService;
