import ProgramRepository from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import ProgramFeatureMask from "../program_feature_mask/index.type";
import Program            from "../program/index.type";

interface ProgramRepositoryFactory {
  construct(
    featurePrograms     : Map<FeatureRequirements, Program>,
    programFeatureMask  : ProgramFeatureMask
  ) : ProgramRepository;
}

export default ProgramRepositoryFactory;
