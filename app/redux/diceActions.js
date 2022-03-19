export const SET_D6_LOCK = "SET_D6_LOCK";
export const SET_D8_LOCK = "SET_D8_LOCK";
export const SET_D10_LOCK = "SET_D10_LOCK";

export const setD6Lock = (d6IsLocked) => (dispatch) => {
  dispatch({
    type: SET_D6_LOCK,
    payload: d6IsLocked,
  });
};

export const setD8Lock = (d8IsLocked) => (dispatch) => {
  dispatch({
    type: SET_D8_LOCK,
    payload: d8IsLocked,
  });
};

export const setD10Lock = (d10IsLocked) => (dispatch) => {
  dispatch({
    type: SET_D10_LOCK,
    payload: d10IsLocked,
  });
};
