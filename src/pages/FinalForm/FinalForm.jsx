import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Route, Switch, useHistory } from 'react-router';
import styled from 'styled-components';
import Container from '../../components/UI/Container';
import { setDataFinalForm } from '../../redux/redusers/datafinalform';
import Finish from './Finish';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


function FinalForm({ title }) {

    const { push } = useHistory();

    const dataForm = useSelector(state => state.dataForm);
    const dispatch = useDispatch();

    const addData = (value) => {
        dispatch(setDataFinalForm(value));
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Switch>
                <Route exact path='/final-form'>
                    <Step1
                        title='Шаг 1'
                        addData={addData}
                        push={push} />
                </Route>
                <Route path='/final-form/step2'>
                    <Step2
                        dataForm={dataForm}
                        push={push}
                        addData={addData}
                        title='Шаг 2' />
                </Route>
                <Route path='/final-form/step3'>
                    <Step3
                        dataForm={dataForm}
                        push={push}
                        addData={addData}
                        title='Шаг 3' />
                </Route>
                <Route path='/final-form/finish'>
                    <Finish dataForm={dataForm} />
                </Route>
            </Switch>
        </Container>
    )
}

export default FinalForm;

const Title = styled.h1`
    margin-top: 30px;
    text-align: center;
`;



