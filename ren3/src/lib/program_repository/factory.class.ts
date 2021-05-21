import ProgramRepositoryFactory  from "./factory.type";
import StandardProgramRepository from "./index.class";
import ProgramRepository         from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import ProgramFeatureMask from "../program_feature_mask/index.type";
import Program            from "../program/index.type";

class StandardProgramRepositoryFactory implements ProgramRepositoryFactory {
  public construct(
    featurePrograms     : Map<FeatureRequirements, Program>,
    programFeatureMask  : ProgramFeatureMask
  ) : ProgramRepository {
    return new StandardProgramRepository(
      featurePrograms,
      programFeatureMask
    );
  }
}

export default StandardProgramRepositoryFactory;
