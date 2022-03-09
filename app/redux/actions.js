export const SET_BASE_HP = "SET_BASE_HP";
export const SET_ENABLE_AUDIO = "SET_ENABLE_AUDIO";
export const SET_SHOW_POPUP = "SET_SHOW_POPUP";

export const setBaseHp = (baseHp) => (dispatch) => {
  dispatch({
    type: SET_BASE_HP,
    payload: baseHp,
  });
};

export const setEnableAudio = (enableAudio) => (dispatch) => {
  dispatch({
    type: SET_ENABLE_AUDIO,
    payload: enableAudio,
  });
};

export const setShowPopup = (showPopup) => (dispatch) => {
  dispatch({
    type: SET_SHOW_POPUP,
    payload: showPopup,
  });
};
