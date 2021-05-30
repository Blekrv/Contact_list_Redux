export const getContacts = (list) => {
  return {
    type: "LIST_LOADED",
    payload: list,
  };
};
export const onAddContact = (newList) => {
  return {
    type: "ADD_CONTACT",
    payload: newList,
  };
};
export const onDeleteContact = (CurrentContact) => {
  return {
    type: "DELETE_CONTACT",
    payload: CurrentContact,
  };
};
export const FindSearch = (Search) => {
  return {
    type: "SHOW_CONTACT",
    payload: Search,
  };
};
export const FindCategory = (Category) => {
  return {
    type: "SEARCH_PROPS",
    payload: Category,
  };
};
export const EditContactAdd = (editedContact) => {
  return {
    type: "EDIT_CONTACT_ADD",
    payload: editedContact,
  };
};
export const EditedContact = (CurrentContact) => {
  return {
    type: "EDIT",
    payload: CurrentContact,
  };
};
export const StatusChange = (index, status) => {
  return {
    type: "CHANGE_STATUS",
    payload: { index, status },
  };
};
// export const Minus = () => {
//     return {
//         type: "MINUS",
//     }
// }
// export const Divide = () => {
//     return {
//         type: "DIVIDE",
//     }
// }
// export const Multiply = () => {
//     return {
//         type: "MULTIPLY",
//     }
// }
// export const Zero = () => {
//     return {
//         type: "ZERO",
//     }
// }
