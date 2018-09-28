import React from "react"
import styled from "styled-components"
import { Text } from "components"

const StyledFooter = styled("div")`
  width: 100vw;
  margin-left: -2em;
  margin-top: 5em;
  position: static;
  bottom: 0;
  height: ${({ theme }) => theme.sizes.footer};
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0 1em;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media(max-width: 767px) {
    justify-content: center;
    .hide-on-mobile {
      display: none !important;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <Text className="hide-on-mobile" white>Terms & Privacy</Text>
    <Text className="hide-on-mobile" white>Copyright &copy; 2018 </Text>
    <Text white>
      For serious food lovers  <span role="img" aria-label="Bento" style={{ fontSize: "1.25em" }}>  🍱</span>
    </Text>
  </StyledFooter>
)

export default Footer