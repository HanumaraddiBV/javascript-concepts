import * as actionTypes from "./ActionTypes";

export const incCount = (val) => {
  return {
    type: actionTypes.INC_COUNT,
    value: val,
  };
};

export const decCount = (val) => {
  return {
    type: actionTypes.DEC_COUNT,
    value: val,
  };
};
