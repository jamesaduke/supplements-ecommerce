// import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: 75vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile
        (   
          {
            height: "40vh",
          }
        )   
    }

`;
const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 13px;
    ${mobile
      (
      {
        textAlign: "center",
        fontSize: "2.2rem",
      }
      )
    }
`;
const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile
        (
          {
            textAlign: "center",
            fontSize: "1.2rem",
          }
        )
    }
`;
const InputContainer = styled.div`
    width: 50%;
    // background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile
          (
              {
                width: "95%"
              }
          )
    }
    
`;
const Input = styled.input`
    margin-bottom: 20px;
    border: 1px solid gray;
    padding: 1em;
    width: 65%;
    border-radius: 5px;
`;
const Button = styled.button`
    border-style: none;
    border-radius: 5px;
    padding: 1em;
    width: 30%;
    cursor: pointer;
    background-color: teal;
    color: white;
`;
const Textarea = styled.textarea`
    width: 65%;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 5px;
    border: 1px solid gray;
`;



const Contact = () => {
  return (
    <Container>
        <Title>Contact Us</Title>
        <Description>Any feedback or queries ?</Description>
        <InputContainer>
            <Input  placeholder='Your email'/>
            <Textarea placeholder='Your message'/>
            <Button>
                {/* <Send /> */}
                Send
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Contact;