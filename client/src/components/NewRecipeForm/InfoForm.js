import React, { Component } from "react"
import {
  Input,
  Button,
  Text,
  ImageUpload,
  TagSelector
} from "components"
import { connect } from "react-redux"
import { Form } from "formik"
import * as yup from "yup"

export const InfoSchema = yup.object().shape({
  title: yup.string().trim().required("Enter a title for your recipe!"),
  description: yup.string().trim().required("Don't forget a short description!"),
  time: yup.number().moreThan(0.0001, "There's no such thing as negative or zero time!").required("Remember to tell others the cooking time!")
})

class InfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTagsId: []
    }
  }
  handleClick = selectedTagId => {
    const { setFieldValue } = this.props
    const { selectedTagsId } = this.state
    if (!selectedTagsId.find(tagId => tagId === selectedTagId)) {
      this.setState(prevState => {
        const newTagsId = prevState.selectedTagsId
        newTagsId.push(selectedTagId)
        setFieldValue("tags", newTagsId)
        return {
          selectedTags: newTagsId
        }
      })
    } else { // deselecting
      const index = selectedTagsId.findIndex(tagId => tagId === selectedTagId)
      this.setState(prevState => {
        let newTagsId = prevState.selectedTagsId
        newTagsId.splice(index, 1)
        setFieldValue("tags", newTagsId)
        return {
          selectedTags: newTagsId
        }
      })
    }
  }

  render() {
    const { tags, values, handleSubmit, setFieldValue } = this.props
    const { selectedTags } = this.state
    if (!tags) {
      return "Loading animation"
    }
    return (
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Text big semiBold green>Create a New Recipe (1/2)</Text>
            <Text style={{ marginBottom: "2.5em", fontSize: "1.35em" }}>What are we making?</Text>
            <Form onSubmit={handleSubmit}>
              <Input
                label="Recipe Name"
                name="title"
                type="text"
              />
              <Input
                label="Description"
                name="description"
                type="text"
              />
              <Input
                label="Time (Minutes)"
                name="time"
                type="number"
                step={1}
              />
              <ImageUpload values={values} setFieldValue={setFieldValue} />
              <TagSelector
                tags={tags}
                handleClick={this.handleClick}
                selectedTags={selectedTags}
              />
              <Text grey>^ Add a couple tags to help your recipe get noticed! ^</Text>
              <Button type="submit">
                To Ingredients and Steps
                <i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i>
              </Button>
            </Form>
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  tags: state.tags
})

export default connect(mapStateToProps)(InfoForm)
