import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from  "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
    width: "99vw"
  })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  ${mobile({
    padding: "10px 0px"
  })}

`;

const Input = styled.input`
    width: 100%;
    //height: 40px;
    border: none;
    //padding: 0 15px;
    //font-size: 14px;
    //outline: none;
    //&:focus {
    //    border: 1px solid #00bcd4;
    //}
    ${mobile({
      width: "100%"
      
    })}
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
    ${mobile
        (
            {
                marginLeft: "10px"
            }
        )
    }
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    font-weight: bold;
    ${mobile
      (
          {
            fontSize: "14px"
          }
      )
    }
  
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile
      (
              {
                justifyContent: "center",
                flex: 2
              }
      )
    }
`;
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  margin-left: 20px;
  ${mobile
      (
              {
                fontSize: "12px",
                marginLeft: "10px"
              }
      )
  }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{ color: "gray", fontSize: "15px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <h1>SUP.</h1>
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