import styled from "styled-components"

const Container = styled.div`
  width: 1140px;
  padding: 0px 20px;
  @media (max-width: 1400px) {
    width: 900px;
  }
  @media (max-width: 1140px) {
    width: 700px;
  }
  @media (max-width: 840px) {
    max-width: 500px;
    width: 100%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export default ({ children, style }) => (
  <Wrapper style={style}>
    <Container>{children}</Container>
  </Wrapper>
)
