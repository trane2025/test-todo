import React from 'react'
import styled from 'styled-components';

function Book({ title, author, date, img, id }) {
    return (
        <Wraper>
            <img src={img} alt={`book`} />
            <Description>
                <li>
                    <h4>{`Название: ${title}`}</h4>
                </li>
                <li>
                    <h5>{`Дата: ${date}`}</h5>
                </li>
                <li>
                    <h5>{`Автор: ${author}`}</h5>
                </li>
                <li>
                    <h5>{`id: ${id}`}</h5>
                </li>
            </Description>
        </Wraper>
    )
}

export default Book;

const Wraper = styled.div`
    padding: 10px;
    background-color: #ffffff;
    margin-top: 5px;
    display: flex;
    border-radius: 5px;

    

    img {
        width: 100px;
        height: auto;
    }
`;

const Description = styled.ul`
    margin-left: 15px;

    li {
        margin-bottom: 5px;
    }
`;
