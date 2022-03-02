import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);

`

export const Content = styled.nav`
    font-size: 1.5rem;
    color: #fff;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        gap: 4.5rem;
    }

    a{
        color: #fff;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }

    }
    a:last-child{
        display: flex;
        align-items: center;
    }


`