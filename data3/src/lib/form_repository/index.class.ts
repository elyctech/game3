import FormRepository from "./index.type";

import Form             from "../form/index.type";
import FormFactory      from "../form/factory.type";
import FormInfo         from "../form_info/index.type";
import FormInfoFactory  from "../form_info/factory.type";

class StandardFormRepository implements FormRepository {
  public constructor(
    private gl2             : WebGL2RenderingContext,
    // TODO FormCache type?
    private formCache       : Map<string, Form>,
    private formFactory     : FormFactory,
    // TODO FormInfoCache type?
    private formInfoCache   : Map<string, FormInfo>,
    private formInfoFactory : FormInfoFactory
  ) {

  }

  public acquireForm(
    name  : string
  ) : Form {
    let form  = this.formCache.get(name);

    if (!form) {
      const info  = this.formInfoFactory.construct(
        this.gl2
      );

      form = this.formFactory.construct(
        info
      );

      this.formCache.set(name, form);
      this.formInfoCache.set(name, info);
    }

    return form;
  }

  public hasForm(
    name  : string
  ) : boolean {
    return this.formCache.has(name);
  }

  public getFormInfo(
    name  : string
  ) : FormInfo {
    const formInfo  = this.formInfoCache.get(name);

    if (!formInfo) {
      throw new Error(`Could not get form info: No such form (${name}).`);
    }

    return formInfo;
  }
}

export default StandardFormRepository;
