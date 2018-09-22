import React, { Component } from 'react'
import ReactStars from 'react-stars'
import { Input, Button, Text } from 'components'
import { Formik, Form } from 'formik'
import { connect } from 'react-redux'
import { addComment } from 'actions'
import styled from 'styled-components'

const commentBoxInitialValues = {
  comment: ""
}

const StyledTextArea = styled('textarea') `
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  width: 100%;
  height: 100px;
  border: 1px ${({ theme }) => theme.colors.grey} solid;
  border-radius: 2.5px;

  &&:focus {
  border-color: ${({ theme }) => theme.colors.grey} !important;
  };
`

const ratingChanged = (newRating) => {
  console.log(newRating)
}

class CommentBox extends Component {

  render() {
    const { handleSubmit } = this.props
    return(
      <div>
        <Formik
          initialValues = {commentBoxInitialValues}
          onSubmit = {handleSubmit}
          render = {() => {
            return (
              <span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={'#ffd700'}
                />
                <Form className="form-inline">
                  <StyledTextArea
                    type="text"
                    name="comment"
                    placeholder={"Leave a comment"}
                  />
                  <Button type="submit" primary style={{ alignItems: "right !important" }}>
                    <Text white>Post</Text>
                  </Button>
                </Form>
              </span>
            )
          }}
        />
      </div>
    )
  }
}

export default connect(null, { addComment })(CommentBox)