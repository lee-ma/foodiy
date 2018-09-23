import React from "react"
import styled from "styled-components"
import { Text } from "components"

const StyledImage = styled("img")`
  max-height: 80vh;
  @media (max-width: 767px) {
    margin-top: 90px;
  }
  margin-top: 25px;
`

const NotFound = () => (
  <div className="row">
    <div className="col-xs-12 col-md-8 offset-md-2">
      <div className="text-align-center">
        <StyledImage
          src="https://s3.amazonaws.com/foodiy-beta/404.png"
          className="img-fluid"
        />
        <Text center block big
          semiBold>
      Oops! The page you are looking for does not exist
          <span role="img" aria-label="sad face"> 😢</span>
        </Text>
      </div>
    </div>
  </div>
)

export default NotFound