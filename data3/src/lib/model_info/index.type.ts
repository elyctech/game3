import FormInfo from "../form_info/index.type";

interface ModelInfo {
  getFormInfo() : FormInfo | null;

  getName() : string;

  setForm(
    name  : string
  ) : void;
}

export default ModelInfo;
