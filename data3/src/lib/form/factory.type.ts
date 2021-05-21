import Form from "./index.type";

import FormInfo from "../form_info/index.type";

interface FormFactory {
  construct(
    info  : FormInfo
  ) : Form;
}

export default FormFactory;
