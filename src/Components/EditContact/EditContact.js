import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateContacts } from "../../Services/api-service";
import { EditedContact } from "../../Actions/ContactListActions";

class EditContact extends React.Component {
  state = {
    Avatar: this.props.List[this.props.CurrentContact].Avatar,
    Gender: this.props.List[this.props.CurrentContact].Gender,
    Name: this.props.List[this.props.CurrentContact].Name,
    Phone: this.props.List[this.props.CurrentContact].Phone,
    Email: this.props.List[this.props.CurrentContact].Email,
    Status: this.props.List[this.props.CurrentContact].Status,
    Avatar1: "",
    Id: this.props.List[this.props.CurrentContact].Id,
    isRedirect: null,
  };
  getName = (e) => {
    const Name = e.target.value;
    this.setState({
      Name: Name,
    });
  };
  getEmail = (e) => {
    const Email = e.target.value;
    this.setState({
      Email: Email,
    });
  };
  getPhone = (e) => {
    const Phone = e.target.value;
    this.setState({
      Phone: Phone,
    });
  };
  getAvatar = (e) => {
    const Avatar = e.target.value;
    this.setState({
      Avatar: Avatar,
    });
  };
  getGender = (e) => {
    const Gender = e.target.value;
    this.setState({
      Gender: Gender,
    });
  };
  getStatus = (e) => {
    const Status = e.target.value;
    this.setState({
      Status: Status,
    });
  };
  sendForm = (e) => {
    e.preventDefault();
    const { CurrentContact } = this.props;
    const { EditedContact, List } = this.props;
    const newContact = {
      Id: this.state.Id,
      Avatar: this.state.Avatar,
      Gender: this.state.Gender,
      Name: this.state.Name,
      Phone: this.state.Phone,
      Email: this.state.Email,
      Status: this.state.Status,
    };
    List[CurrentContact] = newContact;
    EditedContact(List);
    updateContacts(List);
    this.setState({
      isRedirect: true,
    });
  };
  avatarchange = (e) => {
    const Gender = this.state.Gender;
    const Avatar1 = e.target.value;
    this.setState({
      Avatar1: `https://randomuser.me/portraits/${Gender}/${Avatar1}.jpg`,
      Avatar: Avatar1,
    });
  };
  render() {
    const { CurrentContact } = this.props;
    const { Avatar, Gender, Name, Phone, Email, Status } =
      this.props.List[CurrentContact];
    if (this.props.length === "") {
      return <Redirect to="/" />;
    }
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div className="container">
          <h2
            className="mt-3"
            style={{ textAlign: "center", fontSize: "35px" }}
          >
            Edit contact
          </h2>
          <form onSubmit={this.sendForm}>
            <div className="row col-12">
              <div className="col-6">
                <div className="form-group">
                  <fieldset disabled="">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.Name}
                      onChange={(e) => this.getName(e)}
                    />
                  </fieldset>
                </div>

                <div className="form-group">
                  <fieldset>
                    <label className="form-label mt-4">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      value={this.state.Email}
                      onChange={(e) => this.getEmail(e)}
                      required
                    />
                  </fieldset>
                </div>

                <div className="form-group">
                  <label className="form-label mt-4">Phone</label>
                  <input
                    type="number"
                    value={this.state.Phone}
                    className="form-control"
                    onChange={(e) => this.getPhone(e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mt-4">Status</label>
                  <input
                    type="text"
                    value={this.state.Status}
                    className="form-control"
                    onChange={(e) => this.getStatus(e)}
                    required
                  />
                </div>
              </div>
              <div
                className="col-5 avatar_img mt-5 ml-5"
                style={{ backgroundImage: `url('${this.state.Avatar1}')` }}
              ></div>
            </div>
            <div>
              <div className="form-group col-12">
                <label className="col-form-label col-form-label-lg mt-4">
                  Gender
                </label>
                <select
                  className="form-control"
                  type="text"
                  onClick={this.getGender}
                  required
                >
                  <option selected disabled></option>
                  <option value="men">Male</option>
                  <option value="women">Female</option>
                </select>
              </div>

              <div className="form-group  col-12">
                <label className="col-form-label mt-4">Avatar</label>
                <input
                  type="number"
                  min="0"
                  max="99"
                  className="form-control"
                  onChange={(this.getAvatar, this.avatarchange)}
                  required
                  value={this.state.Avatar}
                />
              </div>
            </div>
            <div className="row justify-content-center col-12">
              <button type="submit" className="btn btn-danger col-6 mb-5 mt-4 ">
                Save
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ ContactListReducer }) => {
  const { List, CurrentContact } = ContactListReducer;
  return { List, CurrentContact };
};
const mapDispatchToProps = {
  EditedContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
