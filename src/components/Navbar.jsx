import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";


const Container = styled.div`
    height: 60px;

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 15px;
    font-size: 14px;
    outline: none;
    &:focus {
        border: 1px solid #00bcd4;
    }
  `;

const Left = styled.div`
    flex: 1;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 3px;
    width: 60%;
    display: flex;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    font-weight: bold;
  
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  margin-left: 20px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{ color: "gray", fontSize: 20}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <h1>NASUP.</h1>
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                    REGISTER
                </MenuItem>
                <MenuItem>
                    LOGIN
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;