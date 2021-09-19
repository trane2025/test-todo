import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { setAccountForm } from '../../redux/redusers/reduxForm';

const data = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: '42',
    sex: 'female',
    employed: true,
    favoriteColor: 'Blue',
    bio: 'Born to write amazing Redux code.',
};
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

let ContactForm = (props) => {

    const { handleSubmit, setAccountForm, pristine, reset, submitting } = props;



    return (
        <form onSubmit={handleSubmit}>
            <WraperInput>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </WraperInput>
            <WraperInput>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </WraperInput>
            <WraperInput>
                <label htmlFor="year">Year</label>
                <Field name="age" component="input" type="number" />
            </WraperInput>
            <WraperRadio>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />
                        {' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />
                        {' '}
                        Female
                    </label>
                </div>
            </WraperRadio>
            <WraperCheckBox>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option value="">Select a color...</option>
                        {colors.map(colorOption => (
                            <option value={colorOption} key={colorOption}>
                                {colorOption}
                            </option>
                        ))}
                    </Field>
                </div>
            </WraperCheckBox>

            <WraperCheckBox>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </WraperCheckBox>

            <WraperTextAria>
                <label>Bio</label>
                <div>
                    <Field name="bio" component="textarea" />
                </div>
            </WraperTextAria>
            <Button type="submit" disabled={pristine || submitting}>Отправить</Button>
            <Button type="submit" disabled={pristine || submitting} onClick={reset}>Очистить данные</Button>
            <Button type="submit" onClick={() => setAccountForm(data)}>Заполнить форму</Button>
        </form>
    )
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm);

const mapStateToProps = (state) => ({
    initialValues: state.account.data
});

export default connect(mapStateToProps, { setAccountForm })(ContactForm);;

const Button = styled.button`
    margin-right: 10px;
`;

const WraperTextAria = styled.div`
    margin-bottom: 15px;
    & textarea {
        width: 350px;
        max-width: 350px;
    }
`;


const WraperCheckBox = styled.div`
    margin-bottom: 15px;

    & label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
    }

    & select {
        padding: 10px 15px;
        outline: 1px solid #979797;
        border: none;
        font-size: 16px;
        width: 350px;
        transition-duration: .3s;

        & :active {

        }

        :focus {
            outline: 1px solid #222222;
        }
    }
`;


const WraperRadio = styled.div`
    margin-bottom: 15px;
    input {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

const WraperInput = styled.div`
    margin-bottom: 15px;

    & label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
    }

    & input {
        padding: 10px 15px; 
        outline: 1px solid #979797;
        border: none;
        font-size: 16px;
        width: 350px;
        transition-duration: .3s; 

        & :active {
            
        }

        :focus {
            outline: 1px solid #222222;
        }
    }
`;
