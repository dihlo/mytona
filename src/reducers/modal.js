import { OPEN_MODAL } from "../actions";

const INITIAL_STATE = {
  modal: {
    show: false,
    obj: null,
    param: ""
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modal: { show: action.show, obj: action.obj, param: action.param }
      };
    default:
      return state;
  }
}
