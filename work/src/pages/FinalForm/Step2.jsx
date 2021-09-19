import React from 'react'
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router'
import styled from 'styled-components';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import InputPassword from '../../components/UI/InputPassword';



const validate = (values) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Обязательное поле';
    }
    else if (values.login.match(/[а-яА-Я]/)) {

        errors.login = 'Только латинские символы';
    }
    if (!values.password) {
        errors.password = 'Обязательное поле';
    }
    if (!values.confirm) {
        errors.confirm = 'Обязательное поле';
    }
    else if (values.confirm !== values.password) {
        errors.confirm = 'Пароли не совпадают';
    }

    return errors;
}

function Step2({ dataForm, addData, push, title }) {


    const onSubmit = (obj) => {
        addData(obj);
        push('/final-form/step3');
    }


    if (!dataForm) {
        return (
            <Redirect to="/final-form" />
        )
    }
    return (
        <div>
            <h2>{title}</h2>

            <Wraper>

                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (

                        <form onSubmit={handleSubmit} noValidate>

                            <Field
                                name="login"
                                component={Input}
                                type="text"
                                placeholder="Придумайте Login"
                                label="Login"
                            />

                            <Field
                                name="password"
                                component={InputPassword}
                                type='password'
                                placeholder='Введите пароль'
                                label='Пароль'
                                autoComplete='off'
                            />
                            <Field
                                name="confirm"
                                component={InputPassword}
                                type='password'
                                placeholder='Введите пароль ещё раз'
                                label='Пароль'
                            ></Field>
                            <WraperBtn>
                                <Button color={'primery'} type='submit' disabled={submitting}>Следущий шаг</Button>
                                <Button onClick={form.reset} disabled={submitting || pristine}>Очистисть</Button>
                            </WraperBtn>

                        </form>
                    )} />
            </Wraper>
        </div>
    )
}

export default Step2;


const Wraper = styled.div`
    padding: 30px 0;

    & h1 {
        text-align: center;
    }
`;

const WraperBtn = styled.div`
    display: flex;
    
    button {
        margin-right: 10px;
    }
`;