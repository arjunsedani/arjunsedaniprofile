import {
  defaultFont,
  grayColor
} from "../../styled.js";
import modalStyle from "../modalStyle.js";

const notificationsStyle = theme => ({
  cardTitle: {
    marginTop: "0",
    marginBottom: "3px",
    color: grayColor[2],
    fontSize: "18px"
  },
  cardHeader: {
    zIndex: "3"
  },
  cardSubtitle: {
    ...defaultFont,
    color: grayColor[0],
    fontSize: "14px",
    margin: "0 0 10px"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  marginRight: {
    marginRight: "5px"
  },
  modalSectionTitle: {
    marginTop: "30px"
  },
  ...modalStyle(theme)
});

export default notificationsStyle;
