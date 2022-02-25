import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    margin-top: 0.5em;
    overflow: hidden;
    ${mobile
        (
            {
                display: "none"
            }
        )
    }
    
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -99}vw);

`;

const Slide = styled.div`
    width: 99vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.bg};
`;
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 85%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;


const Slider = () => {

    const [slideIndex, setSlideIndex] = React.useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
  return (
    <div>
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>

                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                {/* <Slide bg="f5fafd">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>VALENTINES SALE!!</Title>
                        <Description>DON'T COMPROMISE GET THE BEST</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide> */}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    </div>
  )
}

export default Slider;
