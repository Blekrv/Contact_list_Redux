import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  onDeleteContact,
  StatusChange,
  EditedContact,
} from "../../../Actions/ContactListActions";
import { updateContacts } from "../../../Services/api-service";
const ContactItem = (props) => {
  const { List } = props;
  const { Id, onDeleteContact, StatusChange, EditedContact } = props;
  const { Avatar, Gender, Name, Phone, Email, Status } = props;
  const image = `https://randomuser.me/portraits/${Gender}/${Avatar}.jpg`;
  const index = List.findIndex((elem) => elem.Id === Id);

  const onDelete = () => {
    const partOne = List.slice(0, index);
    const partTwo = List.slice(index + 1);
    const tmpList = [...partOne, ...partTwo];
    onDeleteContact(tmpList);
    updateContacts(tmpList);
  };
  const changeStatus = () => {
    const index = List.findIndex((elem) => elem.Id === Id);
    if (List[index].Status === "Family") {
      List[index].Status = "Work";
      StatusChange(index, "Work");
      updateContacts(List);
    } else if (List[index].Status === "Work") {
      List[index].Status = "Friends";

      StatusChange(index, "Friends");
      updateContacts(List);
    } else if (List[index].Status === "Friends") {
      List[index].Status = "Family";
      StatusChange(index, "Family");
      EditedContact(List);
    }
  };
  const onEdit = () => {
    EditedContact(index);
  };
  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img src={image} alt="image" className="avatar" /> {Name}
        </div>
        <div className="lab lab-warning cursor" onClick={changeStatus}>
          {Status}
        </div>
      </div>
      <div className="field phone">{Phone}</div>
      <div className="field email">
        {Email}
        <Link to="/edit-contact">
          <FontAwesomeIcon onClick={onEdit} icon={faEdit} size="lg" />
        </Link>
        <FontAwesomeIcon onClick={onDelete} icon={faTrash} size="lg" />
      </div>
    </div>
  );
};
const mapStateToProps = ({ ContactListReducer }) => {
  const { List, CurrentContact } = ContactListReducer;
  return { List, CurrentContact };
};
const mapDispatchToProps = {
  EditedContact,
  onDeleteContact,
  StatusChange,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
