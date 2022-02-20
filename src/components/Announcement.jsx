import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 14px;
`;


const Announcement = () => {
  return (

    <Container>
        Free Shipping!!
    </Container>

  )
}

export default Announcement;
