import styled from 'styled-components'


export const Container = styled.li`

            border-bottom: 1px solid gray ;
            & + li{
                margin-top: 20px;
            }
            strong{
                color: var(--text);
                font-size:2rem;
            }
            p{
                font-size: 1.2rem;
                color: var(--text);
                margin-top: 8px;
            }
            
            a{
                display: inline-block;
                margin-top: 1rem;
                text-decoration: none;
                color: var(--blue-light);
                font-size: 1.5rem;
            }
        
`