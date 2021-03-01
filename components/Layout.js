import styled from "styled-components"
import colors from "../config/colors"

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  background-color: ${({ darkMode }) =>
    darkMode ? colors.lightBlack : colors.white};
  transition: 0.3s;
`
export default Layout
