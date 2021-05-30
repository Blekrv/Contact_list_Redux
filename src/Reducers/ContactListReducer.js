const initialState = {
  List: [],
  CurrentContact: null,
  Search: null,
  Category: "Name",
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_LOADED":
      return {
        ...state,
        List: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        List: action.payload,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        List: action.payload,
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        List: state.List.map((contact, i) =>
          i === action.payload.index
            ? { ...contact, Status: action.payload.status }
            : contact
        ),
      };
    case "SHOW_CONTACT":
      return {
        ...state,
        Search: action.payload,
      };
    case "SEARCH_PROPS":
      return {
        ...state,
        Category: action.payload,
      };
    case "EDIT_CONTACT_ADD":
      return {
        ...state,
        List: action.payload,
      };
    case "EDIT":
      return {
        ...state,
        CurrentContact: action.payload,
      };
    default:
      return state;
  }
};
export default ContactListReducer;
