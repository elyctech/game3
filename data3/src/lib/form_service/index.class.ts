import FormService from "./index.type";

import FormFactory            from "../form/factory.type";
import FormInfoFactory        from "../form_info/factory.type";
import FormRepositoryFactory  from "../form_repository/factory.type";
import FormRepository         from "../form_repository/index.type";

class StandardFormService implements FormService {
  public constructor(
    private formFactory           : FormFactory,
    private formInfoFactory       : FormInfoFactory,
    private formRepositoryFactory : FormRepositoryFactory
  ) {

  }

  public createFormRepository(
    gl2 : WebGL2RenderingContext
  )  : FormRepository {
    return this.formRepositoryFactory.construct(
      gl2,
      new Map(),
      this.formFactory,
      new Map(),
      this.formInfoFactory
    );
  }
}

export default StandardFormService;
