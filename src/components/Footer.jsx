import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px
`;

const Logo = styled.h1`

`;

const Description = styled.p`
    margin: 20px 0;

`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 10px;
`;

const Center = styled.div`
    flex: 1;
    padding: 15px;
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List  =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 15px;
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SUP.</Logo>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim sequi soluta similique quos maiores iusto, perspiciatis dolor explicabo ad natus id aliquid tempore excepturi magni blanditiis libero totam consequatur?
            </Description>

            <SocialContainer>
                <SocialIcon color = "3b5999">
                    <Facebook />
                </SocialIcon>

                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                email@email.com
            </ContactItem>

            <ContactItem>
                +254712345678
            </ContactItem>

            <ContactItem>
                +254712345678
            </ContactItem>

            TODO: Add PAYMENT MEDIA LINKS media links
        </Right>
    </Container>
  )
}

export default Footer;