import {analysisConstant,authConstant} from './../constants';
import axios from 'axios'


export const TodayAnalysis=()=>{
    return async(dispatch)=>{
        dispatch({type:analysisConstant.ANALYSIS_GET_REQUEST})
        try{
            const token =localStorage.getItem('token')
            const result = await axios.get(`${process.env.REACT_APP_ROOT}/analysis`,
         {
           headers: {
             Authorization: token ? `Bearer ${token}` : ''
           }
         })
         const {data} = result
          dispatch({type:analysisConstant.ANALYSIS_GET_SUCCESS,payload:data.results})
        }
        catch(error){
          dispatch({type:analysisConstant.ANALYSIS_GET_FAILURE,payload:{err:error.response.data.message}})
        }
    }
}


export const StockAnalysis=()=>{
  return async(dispatch)=>{
      dispatch({type:analysisConstant.STOCK_ANALYSIS_GET_REQUEST})
      try{
          const token =localStorage.getItem('token')
          const result = await axios.get(`${process.env.REACT_APP_ROOT}/stock?page=1&limit=1`,
       {
         headers: {
           Authorization: token ? `Bearer ${token}` : ''
         }
       })
       const {data} = result
        dispatch({type:analysisConstant.STOCK_ANALYSIS_GET_SUCCESS,payload:data.results})
      }
      catch(error){
        dispatch({type:analysisConstant.STOCK_ANALYSIS_GET_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}
// Clearing Errors
export const clearAnalysisErrors = () => async (dispatch) => {
    dispatch({ type: authConstant.CLEAR_ERRORS });
  };