
import { GET_AREA_SUCCESS, GET_LIST_SUCCESS, GET_SIZE_SUCCESS, IS_LOADING } from '../Action/constant';
const INITIAL_STATE = {
  listData: [] as any[],
  listArea: [] as any[],
  listSize: [] as any[],
  isLoading: false,
  count: 0
} as const;

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return {
        ...state,
        listData: action.payload?.res.data,
        count: action.payload.data?.meta.count,
      };
    case GET_AREA_SUCCESS:
      return {
        ...state,
        listArea: action.payload.resArea.data,
      }
    case GET_SIZE_SUCCESS:
      return {
        ...state,
        listSize: action.payload.resSize.data,
      }
    case IS_LOADING:
      return { ...state, isLoading: action.data };
    default:
      return state;
  }
};
