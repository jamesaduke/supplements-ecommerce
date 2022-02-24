import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url("https:images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=940");
    // TODO: Add background-linear gradient
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 6px 0;
    text-decoration: underline;
    font-size: 12px;
    cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>

            <Form>
                <Input type="text" placeholder="Username/ Email" />

                <Input type="text" placeholder="Password" />
                <Button>Log In</Button>
                <Link>Forgot Password ?</Link>
                <Link>Don't have an account?</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login