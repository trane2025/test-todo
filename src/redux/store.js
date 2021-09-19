import { combineReducers, createStore } from "redux";
import { account } from "./redusers/reduxForm";
import { reducer as formReducer } from 'redux-form';
import dataForm from "./redusers/datafinalform";


const rootRedusers = combineReducers({
    account,
    dataForm,
    form: formReducer
});

export const store = createStore(rootRedusers);