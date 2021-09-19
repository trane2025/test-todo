import React from 'react'
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';



const formateName = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

const validate = (values) => {

    const errors = {};
    if (!values.name) {
        errors.name = "Обязательное поле";
    }
    else if (!values.name.match(/^([^0-9]*)$/)) {
        errors.name = "Имя не может состоять из цифр"
    }
    if (!values.lastName) {
        errors.lastName = "Обязательное поле";
    }
    else if (!values.lastName.match(/^([^0-9]*)$/)) {
        errors.lastName = "Имя не может состоять из цифр"
    }

    return errors;
}




function Step1({ title, addData, push }) {



    const onSubmit = (obj) => {
        addData(obj);
        push('/final-form/step2');
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
                                name="name"
                                component={Input}
                                type="text"
                                placeholder="Введите ваше имя"
                                label="Ваше имя"
                                parse={value => value && formateName(value)}
                            />
                            <Field
                                name="lastName"
                                component={Input}
                                type="text"
                                placeholder="Введите вашу Фамилию"
                                label="Ваша фамилия"
                                parse={value => value && formateName(value)}
                            />
                            <WraperBtn>
                                <Button type='submit' color='primery' disabled={submitting}>Следущий шаг</Button>
                                <Button onClick={form.reset} disabled={submitting || pristine}>Очистисть</Button>
                            </WraperBtn>

                        </form>
                    )} />
            </Wraper>
        </div>
    )
}

export default Step1;


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
