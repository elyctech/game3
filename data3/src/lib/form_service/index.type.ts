import FormRepository from "../form_repository/index.type";

interface FormService {
  createFormRepository(
    gl2 : WebGL2RenderingContext
  )  : FormRepository;
}

export default FormService;
