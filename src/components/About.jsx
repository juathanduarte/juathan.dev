import React from 'react';
import styled from 'styled-components';
import juathanDevImage from '../assets/images/juathanDev.jpeg';

const Container = styled.div`
    display: flex;
    padding: 2rem;
    min-height: 80vh;
    background-color: var(--secondary-color);
    align-items: center;
`

const Image = styled.img`
    width: 400px;
    filter: grayscale(100%);
`

const Text = styled.p`
    color: var(--primary-color);
    width: 300px;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    


/* font-size: 3vw;
    font-weight: 700;
    color: var(--secondary-color);
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    white-space: pre-line;
    text-align: center;
    line-height: 1.5;
    text-shadow: */

    /* margin-right: 2rem; Adicione um espaçamento à direita para separar o texto da imagem */
`

export function About() {
    return (
        <>
            <Container>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, enim vel volutpat blandit,
                    nisl nulla elementum lacus, at faucibus tellus massa sed nunc. Duis porttitor sagittis feugiat.
                    Aliquam convallis venenatis ex ut pharetra. Sed non orci non augue tempor tincidunt id a ligula.
                </Text>
                <Image src={juathanDevImage} alt="Juathan Dev" />
            </Container>
        </>
    );
}
