import DefaultProgramsFactory  from "./factory.type";
import StandardDefaultPrograms from "./index.class";
import DefaultPrograms         from "./index.type";

class StandardDefaultProgramsFactory implements DefaultProgramsFactory {
  public construct() : DefaultPrograms {
    return new StandardDefaultPrograms();
  }
}

export default StandardDefaultProgramsFactory;
