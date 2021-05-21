import ModelRepository from "./index.type";

import FormRepository   from "../form_repository/index.type";
import ModelFactory     from "../model/factory.type";
import Model            from "../model/index.type";
import ModelInfoFactory from "../model_info/factory.type";
import ModelInfo        from "../model_info/index.type";

class StandardModelRepository implements ModelRepository {
  public constructor(
    private formRepository    : FormRepository,
    // TODO ModelCache type?
    private modelCache        : Map<string, Model>,
    private modelFactory      : ModelFactory,
    // TODO ModelInfoCache type?
    private modelInfoCache    : Map<string, ModelInfo>,
    private modelInfoFactory  : ModelInfoFactory
  ) {

  }

  public acquireModel(
    name  : string
  ) : Model {
    let model  = this.modelCache.get(name);

    if (!model) {
      const info  = this.modelInfoFactory.construct(
        this.formRepository,
        name
      );

      model = this.modelFactory.construct(
        info
      );

      this.modelCache.set(name, model);
      this.modelInfoCache.set(name, info);
    }

    return model;
  }

  public hasModel(
    name  : string
  ) : boolean {
    return this.modelCache.has(name);
  }

  public getModelInfo(
    name  : string
  ) : ModelInfo {
    const modelInfo  = this.modelInfoCache.get(name);

    if (!modelInfo) {
      throw new Error(`Could not get model info: No such model (${name}).`);
    }

    return modelInfo;
  }
}

export default StandardModelRepository;
