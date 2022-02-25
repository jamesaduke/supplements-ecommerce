import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url("https:images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    // TODO: Add background-linear gradient
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile
        (
          {
            width: "75%",
          }
        )
    }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>

            <Form>
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Password" />
                <Input type="text" placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register