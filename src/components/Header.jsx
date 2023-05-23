import styled, { keyframes } from 'styled-components';

const Container = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    min-height: 80vh;
    background-color: var(--secondary-color);
`;

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.h1`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;                     
    color: var(--primary-color);
`;

const Nav = styled.nav`
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;

    ul {
        display: flex;
        list-style: none;
        color: var(--tertiary-color);
        
        li {
            margin-left: 4rem;
            cursor: pointer;
            position: relative;

            &:hover::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 1px;
                background-color: var(--primary-color);
            }
        }
    }
`;

const TagBodyHeader = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const TitlePage = styled.h1`
    font-size: 3vw;
    font-weight: 700;
    color: var(--secondary-color);
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    white-space: pre-line;
    text-align: center;
    line-height: 1.5;
    text-shadow:
        -1px -1px 0 var(--tertiary-color),
        1px -1px 0 var(--tertiary-color),
        -1px 1px 0 var(--tertiary-color),
        1px 1px 0 var(--tertiary-color);
    
    span.text_outline {
        color: var(--primary-color);
        font-size: 3vw;
        font-weight: 900;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
        text-shadow: none;
    }

    span.text_red {
        color: var(--quaternary-color);
        font-size: 3vw;
        font-weight: 900;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
        text-shadow: none;
    }
`;

export function Header() {
  return (
    <>
        <Container>
                <TagHeader>
                    <Logo>juathan.dev</Logo>
                    <Nav>
                        <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        </ul>
                    </Nav>
                </TagHeader>

                <TagBodyHeader>
                    <TitlePage>
                        Olá, eu sou o <span className="text_outline">Juathan</span><span className="text_red">.</span><br />
                        Desenvolvedor <span className="text_outline">front-end</span> & <span className="text_outline">mobile</span><span className="text_red">.</span>
                    </TitlePage>
                </TagBodyHeader>
        </Container>
    </>
  );
}

