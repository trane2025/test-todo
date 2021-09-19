const SET_ACCOUNT_FORM = 'SET_ACCOUNT_FORM';





export const account = (state = {}, action) => {
    switch (action.type) {

        case SET_ACCOUNT_FORM:
            return {
                data: action.data
            }

        default:
            return state
    }
}

export const setAccountForm = data => ({ type: SET_ACCOUNT_FORM, data });