import Content from "./index.type";

import {
  FormRepository,
  ModelRepository
} from "@game3/data3";

interface ContentFactory {
  construct(
    formRepository  : FormRepository,
    modelRepository : ModelRepository
  ) : Content;
}

export default ContentFactory;
