import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Input from '../UI/Input';

const validate = values => {

    const errors = {}
    if (!values.username) {
        errors.username = 'Обязательное поле'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Обязательное поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Обязательное поле'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

const ValidateForm = (props) => {

    const { handleSubmit, submitting, pristine, reset } = props;



    return (
        <Wraper>
            <h3>Форма валидации</h3>
            <form onSubmit={handleSubmit}>
                <Field
                    name='username'
                    label='Имя пользователя'
                    placeholder='Введите ваше имя'
                    type='text'
                    component={Input}
                />
                <Field
                    name='email'
                    label='Email'
                    placeholder='Введите ваш email'
                    type='email'
                    component={Input}
                />
                <Field
                    name='age'
                    label='Ваш возраст'
                    placeholder='Укажите ваш возразст'
                    type='number'
                    component={Input}
                />
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        </Wraper>
    )
}


export default reduxForm({ form: 'validate-form', validate })(ValidateForm);


const Wraper = styled.div`
    margin-top: 50px;

    background-color: white;
    padding: 30px;
    h3 {
        margin-bottom: 30px;
    }

`;