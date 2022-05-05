import React, { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
`
const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:0.8rem 2rem;
`
const Main = styled.div`
    display:flex;
    flex-direction:column;
    border:1px;
    justify-content:center;
    align-items:center;
`
const Footer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

const P = styled.p`
    color: ${({ theme }) => theme.text };
    margin:0.5rem 0rem;
`

const Button = styled.button`
  background:  ${({ theme }) => theme.buttonBackground };
  color: ${({ theme }) => theme.buttonText };
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.buttonBorder };
  border-radius: 3px;
  width: 10rem;
  transition: .2s ease-in-out 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);  }
`;


function NotFound(){
  const [memeURL, setMemeURL] = useState('./logo.png');

  const  updateMeme = async () => {
    const response = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await response.json();
    setMemeURL(data.url);
  }

  console.log(memeURL);
  return (
    <Container>
      <Header>
        <a href="#Home">
          <div className='logoWrapper'>
            <img src="./logo.png" alt="Logotipo de la empresa" className='logo' />
            <P>Company Logotype</P>
          </div>
        </a>

        <a href="#ContactForm">
          <P>Contáctanos</P>
        </a>
      </Header>

      <Main>
        <P className='MainText'>Ups... Esta página se ha ido.</P>
        <P>Mientras esté aquí, disfrute de un meme random.</P>
        <img src={memeURL} alt="Logotipo de la empresa" className='meme' />
      </Main>

      <Footer>
        <Button >Página Principal</Button>
        <Button onClick={updateMeme}>Meme Random</Button>
      </Footer>
    </Container>
  )
}

export default NotFound

