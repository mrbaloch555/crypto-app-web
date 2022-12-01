import {analysisConstant,authConstant} from './../constants';

const initialState = {
  todayAnalysis: [],
  analysisErrors: [],
  stockAnalysis:[],
  loading: false,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
      case analysisConstant.ANALYSIS_GET_REQUEST:
        case analysisConstant.STOCK_ANALYSIS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
      case analysisConstant.ANALYSIS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        todayAnalysis: action.payload,
      };
      break;
      case analysisConstant.STOCK_ANALYSIS_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          stockAnalysis: action.payload,
        };
        break;
    case analysisConstant.ANALYSIS_GET_FAILURE:
      case analysisConstant.STOCK_ANALYSIS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        analysisErrors: action.payload.err,
      };
      break;
      case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        analysisErrors: [],
      };
      break;
      default:
      return state;
  }
};

export default currencyReducer;
