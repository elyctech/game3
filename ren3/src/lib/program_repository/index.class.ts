import ProgramRepository from "./index.type";

import {
  FeatureRequirements
} from "@game3/data3";

import ProgramFeatureMask from "../program_feature_mask/index.type";
import Program            from "../program/index.type";

class StandardProgramRepository implements ProgramRepository {
  public constructor(
    private featurePrograms     : Map<FeatureRequirements, Program>,
    private programFeatureMask  : ProgramFeatureMask
  ) {

  }

  public getProgramWithFeatures(
    featureRequirements : FeatureRequirements
  ) : Program {
    const requiredFeatures  = featureRequirements & this.programFeatureMask;

    if (!this.featurePrograms.has(requiredFeatures)) {
      throw new Error("Could not get Rendering Program: Unsupported feature set.");
    }

    return this.featurePrograms.get(requiredFeatures)!;
  }
}

export default StandardProgramRepository;
