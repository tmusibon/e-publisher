const defaultState = {
  appName: "",
  modalMode: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      console.log(`toggling modal: ${action.modalMode}`);
      return {
        ...state,
        modalMode: action.modalMode,
      };
    default:
      return state;
  }
};
