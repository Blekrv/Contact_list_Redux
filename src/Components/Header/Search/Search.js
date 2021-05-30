import React from "react";
import { connect } from "react-redux";
import { FindCategory, FindSearch } from "../../../Actions/ContactListActions";

class Search extends React.Component {
  state = {
    findContact: "",
    findProp: "",
  };

  searchName = (event) => {
    const { FindSearch } = this.props;
    let SearchName = event.target.value;
    FindSearch(SearchName);
  };
  searchProp = (event) => {
    const { FindCategory } = this.props;
    let SearchProps = event.target.value;
    FindCategory(SearchProps);
  };
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          onChange={this.searchName}
          type="text"
          placeholder="Search"
        />
        <select className="form-control" onClick={this.searchProp}>
          <option value="Name" selected>
            Name
          </option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Status">Status</option>
        </select>
      </form>
    );
  }
}
const mapStateToProps = ({ ContactListReducer }) => {
  const { List, Search, Category } = ContactListReducer;
  return { List, Search, Category };
};
const mapDispatchToProps = {
  FindSearch,
  FindCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
