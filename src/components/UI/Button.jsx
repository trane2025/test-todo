import React from 'react'
import styled from 'styled-components';

function Button({ children, color, ...props }) {
    return (
        <Wraper {...props} color={color}>
            {children}
        </Wraper>
    )
}

export default Button;

const Wraper = styled.button`
    font-weight: 600;
    font-size: 14px;
    padding: 12px 30px;
    border: none;
    background-color: ${({ color }) => color === 'primery' ? '#29c495' : '#d13535'};
    color: white;
    cursor: pointer;
    /* border-radius: 20px; */

    :disabled {
        background-color: #a7a7a7;
        color: #666666;
    }
`;
