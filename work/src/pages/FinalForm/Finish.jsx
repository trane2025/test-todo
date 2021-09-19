import React from 'react'
import { Redirect } from 'react-router';
import styled from 'styled-components';

function Finish({ dataForm }) {

    if (!dataForm) {
        return (
            <Redirect to="/final-form" />
        )
    }
    return (
        <Wraper>
            <List>
                <Item>
                    <img src={dataForm.images[0]} alt="photoUser" />
                </Item>
                <Item>
                    <p>{`Имя: ${dataForm.name}`}</p>
                </Item>
                <Item>
                    <p>{`Фамилия: ${dataForm.lastName}`}</p>
                </Item>
                <Item>
                    <p>{`Логин: ${dataForm.login}`}</p>
                </Item>
            </List>
        </Wraper>
    )
}

export default Finish;

const Wraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

const List = styled.div`
    background-color: white;
    padding: 30px;
`;

const Item = styled.div`
    img {
        max-width: auto;
        height: 300px;
    }
`;
