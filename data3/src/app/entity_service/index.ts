import entityServiceFactory from "./factory";

import entityFactory            from "../entity/factory";
import entityInfoFactory        from "../entity_info/factory";
import entityRepositoryFactory  from "../entity_repository/factory";

const entityService = entityServiceFactory.construct(
  entityFactory,
  entityInfoFactory,
  entityRepositoryFactory
);

export default entityService;
