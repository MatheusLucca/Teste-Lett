import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
    margin-bottom: 2rem;
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
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        color: #fff;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }

    }
    button:last-child{
        display: flex;
        align-items: center;
    }


`