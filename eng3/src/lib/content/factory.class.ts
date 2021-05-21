import ContentFactory  from "./factory.type";
import StandardContent from "./index.class";
import Content         from "./index.type";

import {
  FormRepository,
  ModelRepository
} from "@game3/data3";

class StandardContentFactory implements ContentFactory {
  public construct(
    formRepository  : FormRepository,
    modelRepository : ModelRepository
  ) : Content {
    return new StandardContent(
      formRepository,
      modelRepository
    );
  }
}

export default StandardContentFactory;
