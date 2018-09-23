import React, { Component } from 'react'
import ReactStars from 'react-stars'
import { withRouter } from 'react-router-dom'
import { Input, Button, Text } from 'components'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { addComment } from 'actions'

const commentBoxInitialValues = {
  comment: ""
}

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: null,
      error: null,
      submitted: false
    }
  }

  handleSubmit = values => {
    const { rating } = this.state
    if (!rating) this.setState({ error: "Don't forget a rating!" })
    else {
      this.setState({ submitted: true }, () => {
        this.props.addComment(this.props.match.params.id, { ...values, rating })
      })
    }
  }

  ratingChanged = rating => this.setState({ rating, error: null })

  render() {
    const { rating, error, submitted } = this.state
    // For after the user submits their comment
    if (submitted) {
      return <Text large className="fadein">Thanks for your opinion!</Text>
    }

    return(
      <div>
        <Formik
          initialValues = {commentBoxInitialValues}
          onSubmit = {this.handleSubmit}
          render = {() => {
            return (
              <span>
                <Form className="form-inline">
                  <Field
                    name="rating"
                    type="number"
                    component={() => <span>
                      <ReactStars
                        value={rating}
                        onChange={this.ratingChanged}
                        size={22}
                        half={false}
                        color2={'#ffd700'}
                      />
                      {error && <Text error small>{error}</Text>}
                    </span>}
                  />
                  <Input
                    type="text"
                    name="content"
                    placeholder="Tell us what you think!"
                    textarea
                  />
                  <Button type="submit" primary>
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

export default withRouter(connect(null, { addComment })(CommentBox))