import React, { useState } from 'react';
import styled from 'styled-components';



function InputPassword({ input, placeholder, label, meta }) {

    const [type, setType] = useState(input.type);

    const changeType = () => {
        if (type === 'password') {
            setType('text');
        } else setType('password');
    }

    return (
        < Wraper>
            {meta.touched && meta.error && <WarningMessage>{meta.error}</WarningMessage>}
            <label>{label}</label>
            <WraperInput error={meta.touched && meta.error} focus={meta.active}>
                <input  {...input} placeholder={placeholder} autoComplete={'off'} type={type} />
                {input.value && <ToggleBtn onClick={changeType}>{type === 'password' ? 'Показать' : 'Скрыть'}</ToggleBtn>}
                {meta.valid &&
                    <WraperIcon>
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#1DC37E" />
                            <path d="M21.276 12.4269L14.2422 19.4603C13.7213 19.9812 12.8764 19.9812 12.355 19.4603L8.72405 15.8291C8.20299 15.3081 8.20299 14.4631 8.72405 13.942C9.24522 13.4208 10.0901 13.4208 10.611 13.9418L13.2989 16.6297L19.3888 10.5397C19.91 10.0185 20.7549 10.0189 21.2759 10.5397C21.7968 11.0608 21.7968 11.9055 21.276 12.4269Z" fill="white" />
                        </svg>
                    </WraperIcon>}
                {meta.touched && meta.error &&
                    <WraperIcon>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#EE1E1E" />
                            <rect x="5.96912" y="13.649" width="10.6555" height="1.38984" rx="0.694922" transform="rotate(-45 5.96912 13.649)" fill="white" />
                            <rect x="7.01294" y="6" width="10.6555" height="1.38984" rx="0.694922" transform="rotate(45 7.01294 6)" fill="white" />
                        </svg>
                    </WraperIcon>}
            </WraperInput>

        </Wraper>
    )
}

export default InputPassword;

const ToggleBtn = styled.p`
    font-size: 14px;
    font-weight: 600;
    padding-right: 10px;
    padding-left: 10px;
    color: #616161;
    cursor: pointer;
    user-select: none;
    margin: 0;
`;

const WraperIcon = styled.div`
    display: inherit;
    padding: 10px;
    /* width: 40px;
    height: 40px; */
`;

const WraperInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    outline: ${({ error }) => error ? '1px solid #ee1e1e' : '1px solid #979797'};
    background-color: white;
    width: 350px;

     input {
        padding: 10px;
        border: none;
        font-size: 16px;
        transition-duration: .3s;
        outline: none;
        flex: 1;
        
    }
`;

const WarningMessage = styled.span`
   color: #ee1e1e;
   font-weight: 600;
   position: absolute;
   right: 0;
   top: 0px;
   font-size: 14px;

`;

const Wraper = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: fit-content;

    & label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
    }

    
`;



