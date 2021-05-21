import Content from "./index.type";

import {
  Form,
  FormRepository,
  Model,
  ModelRepository
} from "@game3/data3";

class StandardContent implements Content {
  public constructor(
    private formRepository  : FormRepository,
    private modelRepository : ModelRepository
  ) {

  }

  public acquireForm(
    name  : string
  ) : Form {
    return this.formRepository.acquireForm(
      name
    );
  }

  public acquireModel(
    name  : string
  ) : Model {
    return this.modelRepository.acquireModel(
      name
    );
  }
}

export default StandardContent;
