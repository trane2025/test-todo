import React from 'react';

import styled from 'styled-components';
// import ContactForm from '../components/Forms/ContactForm';
import ValidateForm from '../components/Forms/ValidateForm';
import Container from '../components/UI/Container';


const ReduxForm = () => {

    // const state = useSelector(state => state.form);

    // const handleSubmit = (value) => {
    //     console.log(value);
    // }

    const validateSubmit = (val) => {
        console.log(val);
    }

    return (
        <Wraper>
            <Container>
                <h1>Redux Form</h1>

                {/* <ContactForm onSubmit={handleSubmit} /> */}
                <ValidateForm onSubmit={validateSubmit} />

            </Container>
        </Wraper>
    )
}

export default ReduxForm;

const Wraper = styled.div`
    padding: 50px;

    & h1 {
        text-align: center;
    }
`;


