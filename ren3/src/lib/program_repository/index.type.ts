import {
  FeatureRequirements
} from "@game3/data3";

import Program  from "../program/index.type";

interface ProgramRepository {
  getProgramWithFeatures(
    featureRequirements : FeatureRequirements
  ) : Program;
}

export default ProgramRepository;
