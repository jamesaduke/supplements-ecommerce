import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile
        (
          {
            padding: '10px',
          }
        )
    }
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none",})};
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column",})};
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  ${mobile({ flexDirection: "column",})};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid black;
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "5px 15px",})};
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight:200;
  ${mobile({ marginBottom: "18px",})};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 100;
`;

const SummaryItem = styled.div`
   margin: 23px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "600"};
  font-size: ${props => props.type === "total" && "25px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: #fff;
  font-weight: 600;
  
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList(0)</TopText>
                </TopTexts>

                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src = 'https://lcw.akinoncdn.com/products/2020/01/09/1303010/4ecd8133-52d1-4dcd-8013-83bcdb350b85_size265x353_cropCenter.jpg'/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHIRT</ProductName>
                                <ProductId><b>ID:</b> 9099023458</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>KSh 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src = 'https://lcw.akinoncdn.com/products/2020/01/09/1303010/4ecd8133-52d1-4dcd-8013-83bcdb350b85_size265x353_cropCenter.jpg'/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHIRT</ProductName>
                                <ProductId><b>ID:</b> 9099023458</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>KSh 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal  </SummaryItemText>
                        <SummaryItemPrice>KSh 20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping  </SummaryItemText>
                        <SummaryItemPrice>KSh 590</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount  </SummaryItemText>
                        <SummaryItemPrice>KSh -590</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total  </SummaryItemText>
                        <SummaryItemPrice>KSh 1000</SummaryItemPrice>
                    </SummaryItem>

                        <Button>CHECKOUT NOW</Button>

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart