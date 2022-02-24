import styled from "styled-components"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgCotainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`;

const AmountCotainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;


const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 10px;
    border: 1.5px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <ImgCotainer>
                <Image src = "https://lcw.akinoncdn.com/products/2021/04/07/2565111/8bd16c3f-1884-4b89-8eb4-3b1a1930f159_size561x730.jpg"/>
            </ImgCotainer>

            <InfoContainer>
                <Title>Jean</Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro facilis neque consectetur nesciunt cum voluptatum quas doloribus velit, distinctio, reprehenderit quisquam asperiores, ipsam tenetur assumenda error suscipit. Nemo, repudiandae.
                </Description>
                <Price>$100</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>


                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>

                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountCotainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountCotainer>
                    <Button> ADD TO CART </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Contact />
        <Footer />
    </Container>
  )
}

export default Product