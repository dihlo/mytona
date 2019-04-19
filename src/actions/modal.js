export const OPEN_MODAL = "open_modal";

export const openModal = (show, obj, param) => {
  return dispatch =>
    dispatch({
      type: OPEN_MODAL,
      show,
      obj,
      param
    });
};
