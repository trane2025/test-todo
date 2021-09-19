import React from 'react'
import styled from 'styled-components';

function Container({ children }) {
    return (
        <Wraper>
            {children}
        </Wraper>
    )
}

export default Container;


const Wraper = styled.div`
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
`;
