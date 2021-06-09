import styled from 'styled-components'


export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;



    div {
        background: var(--shape);
        color: var(--text-file);


        padding: 1.5rem 2rem;

        border-radius: 0.25rem;


        header {
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 1.5rem;
            line-height: 3rem;
            font-weight: 500;
        }
    }

    .highlight-bg{
        background: var(--green);
        color: #FFF;
    }


`