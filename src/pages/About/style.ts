import styled from 'styled-components'


export const Container = styled.main`
    display:flex ;
    gap: 3rem;
    padding: 1rem 3rem;
    color: var(--text);
img{
    border-radius: 24rem;
    width: 360px;
    height:360px;
}
h2{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
ul{
    display: flex;
    list-style:none;
    align-items:center ; 
    gap: 2rem;
}
li{
    display:flex ;
    align-items:center ;
}
a{
    color: var(--text);
}
span{
    font-size: 2rem;
}
`