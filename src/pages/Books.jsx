import React from 'react'
import styled from 'styled-components';

import { books } from '../books.json';
import Acardion from '../components/UI/Acardion';
import Container from '../components/UI/Container';

const sortYear = (arr) => {
    return arr.reduce((acum, el) => {

        const date = el.date.split('.')[2];
        return {
            ...acum,
            [date]: acum[date] ? [...acum[date], el] : [el]
        }
    }, {})
}


const getDateNum = (date) => {
    let dateArr = date.split('.').reverse();
    return +dateArr.reduce((ac, n) => ac + n, '');
}

const sortBooksArr = books.sort((a, b) => getDateNum(b.date) - getDateNum(a.date));

const booksObj = sortYear(sortBooksArr);

function Books({ a }) {

    console.log(a);

    return (
        <Section>
            <Container>
                {Object.keys(booksObj).reverse().map(key => {
                    const arr = booksObj[key];
                    return (
                        <Acardion title={key} arr={arr} key={key} />
                    )
                })}


            </Container>

        </Section>
    )
}

export default Books;

const Section = styled.section`
  padding: 50px 0;
`;




