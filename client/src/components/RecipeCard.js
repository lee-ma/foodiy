import React from 'react'
import styled from 'styled-components'
import { Text } from './index'

const RecipeCard = (props) => {
  const { imgSrc, title, time, description, href } = props
  const StyledCard = styled('a')`
    padding: 0 0 1em 0;
    margin: 0 1em;
    min-width: 18em;
    max-width: 18em;
    max-height: 22em;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    :hover {
      text-decoration: none;
      /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    };
}`

  return (
    <StyledCard href={href}>
      <div
        className="row"
        style={{
          backgroundImage: `url(${imgSrc})`,
          width: '100%',
          paddingBottom: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '0'
        }}
      />
      <div style={{ marginTop: "0.5em" }}>
        <Text medium bold style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: "ellipsis" }}>{title}</Text>
        <Text>Cooking Time:{' '}{time}{` hour${time === 1 ? "" : "s"}`}</Text>
        <Text grey small style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: "ellipsis" }}>{description}</Text>
      </div>
    </StyledCard>
  )
}

export default RecipeCard
