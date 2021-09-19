const SET_DATA_FINAL_FORM = 'SET_DATA_FINAL_FORM';



const initialState = null;


const dataForm = (state = initialState, action) => {
    switch (action.type) {

        case SET_DATA_FINAL_FORM:
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}


export default dataForm;


export const setDataFinalForm = (data) => ({ type: SET_DATA_FINAL_FORM, data });