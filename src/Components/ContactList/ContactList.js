import React from "react";
import { connect } from "react-redux";
// ContactItem
import ContactItem from "./ContactItem/ContactItem";
import { getAllContacts } from "../../Services/api-service";
// Actions
import {
  getContacts,
  FindCategory,
  FindSearch,
} from "../../Actions/ContactListActions";

class ContactList extends React.Component {
  componentDidMount() {
    const { getContacts } = this.props;
    getAllContacts().then((data) => {
      if (data === null) {
        getContacts([]);
      } else {
        getContacts(data);
      }
    });
  }
  onShowContact = () => {
    const { List, Search, Category } = this.props;
    if (Search === null || Search.length === 0) {
      return List;
    }
    return List.filter((item) => {
      return (
        item[`${Category}`].toLowerCase().indexOf(Search.toLowerCase()) > -1
      );
    });
  };
  render() {
    const SearchFilter = this.onShowContact();
    return (
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <div className="col-sm-12">
            <div className="contacts-list">
              <h5 className="title">Contact List</h5>
              <div className="unit head">
                <div className="field name">
                  <div className="check">
                    <input id="cb1" name="cb1" type="checkbox" />
                    <label htmlFor="cb1"></label>
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </div>
                  Name
                </div>
                <div className="field phone">Phone</div>
                <div className="field email icons">
                  Email
                  <i className="fas fa-user-edit"></i>
                </div>
              </div>
              {SearchFilter.length !== 0 ? (
                SearchFilter.map((item) => {
                  return <ContactItem key={item.Id} {...item} />;
                })
              ) : (
                <h2>Contacts not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ ContactListReducer }) => {
  const { List, Search, Category } = ContactListReducer;
  return { List, Search, Category };
};
const mapDispatchToProps = {
  getContacts,
  FindSearch,
  FindCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
