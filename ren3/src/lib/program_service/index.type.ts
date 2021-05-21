import ProgramRepository  from "../program_repository/index.type";

interface ProgramService {
  createProgramRepository(
    gl2 : WebGL2RenderingContext
  ) : ProgramRepository;
}

export default ProgramService;
