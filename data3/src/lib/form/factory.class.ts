import FormFactory  from "./factory.type";
import StandardForm from "./index.class";
import Form         from "./index.type";

import FormInfo from "../form_info/index.type";

class StandardFormFactory implements FormFactory {
  public construct(
    info  : FormInfo
  ) : Form {
    return new StandardForm(
      info
    );
  }
}

export default StandardFormFactory;
