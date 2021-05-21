import {
  Form,
  Model
} from "@game3/data3";

interface Content {
  acquireForm(
    name  : string
  ) : Form;

  acquireModel(
    name  : string
  ) : Model;
}

export default Content;
