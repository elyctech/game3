import Form     from "../form/index.type";
import FormInfo from "../form_info/index.type";

interface FormRepository {
  acquireForm(
    name  : string
  ) : Form;

  hasForm(
    name  : string
  ) : boolean;

  getFormInfo(
    name  : string
  ) : FormInfo;
}

export default FormRepository;
