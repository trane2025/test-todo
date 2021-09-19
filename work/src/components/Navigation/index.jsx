import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../UI/Container';

function Navigation({ links }) {



    return (
        <Wraper>
            <Container>
                <ListLinks>
                    {links.map(({ href, title, exact }) => {
                        return (
                            <ItemLinks key={title}>
                                <NavLink to={href} exact={exact} activeClassName='active-link'>{title}</NavLink>
                            </ItemLinks>
                        )
                    })}
                </ListLinks>
            </Container>
        </Wraper>
    )
}

export default Navigation;

const Wraper = styled.header`
    background-color: white;
`;

const ListLinks = styled.ul`
    display: flex;
    padding: 15px 0;
`;

const ItemLinks = styled.li`
    margin-right: 15px;

    .active-link {
        border-bottom: 1px solid black;
    }
`;
