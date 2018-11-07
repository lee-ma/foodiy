import React from "react"
import styled from "styled-components"
import _ from "lodash"
import { Text } from "components"

const TagContainer = styled("div")`
  display: flex;
  margin-top: 1em;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Tag = styled("div")`
  padding: 5px 10px;
  margin: 3px 5px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 3px;
  background-color: ${props => props.selected
    ? props.theme.colors.green
    : "white"};
  & > span {
    color: ${props => props.selected ? "white !important" : ""};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.green};
  }

  &:hover > span {
    color: white !important;
  }
`

const TagSelector = ({ tags, handleClick, selectedTags }) => {
  return (
    <TagContainer>
      {tags.map((tag, index) => (
        <Tag
          onClick={() => handleClick(tag.id)}
          selected={_.includes(selectedTags, tag.id)}
          key={index}>
          <Text>{tag.name}</Text>
        </Tag>
      ))
      }
    </TagContainer >
  )
}

export default TagSelector