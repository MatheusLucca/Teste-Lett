import styled from 'styled-components'


export const Container = styled.div` 
    padding: 2rem;
    margin-bottom: 2rem;
    background: #262626;
    color:#fff ;
    border-radius:0.25rem;
    h1{
        display:block;
        margin-bottom: 1rem;
    }
    div{
        margin-bottom: 2rem;
        display: flex;
        gap:1.5rem;

        input{
            width: 20rem;
            line-height: 2rem;
            padding-left: 0.2rem;
        }
    }
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        width: 12rem;
        transition: filter 0.2s;
    
        &:hover {
            filter: brightness(0.9);
        }
    
    }
`