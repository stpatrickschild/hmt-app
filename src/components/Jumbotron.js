import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Styled from 'styled-components';
import happypplImage from '../assets/happypplImage.jpg';
// import { happypplImage } from './assets/happypplImage.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${happypplImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
console.log(happypplImage)

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className= "jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to MPT</h1>
        <p>A site where a student was inspired and has taken initiatives to create awareness on health care cost </p>
        
      </Container>
    </Jumbo>
  </Styles>
)

export default Jumbotron;