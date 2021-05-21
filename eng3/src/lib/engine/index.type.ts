import Content  from "../content/index.type";
import Settings from "../settings/index.type";
import State    from "../state/index.type";

import EngineBrake  from "../engine_brake/index.type";

interface Engine {
  getContent()  : Content;

  getSettings() : Settings;

  getState()  : State;

  start() : EngineBrake;
}

export default Engine;
