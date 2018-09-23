import React, { Component } from "react"
import { Input, Button, Text } from "components"
import { Formik, Form } from "formik"
import { connect } from "react-redux"
import { fetchRecipes } from "actions"

const searchBarInitialValues = {
  searchQuery: ""
}

class SearchBar extends Component {
  render() {
    const { handleSubmit } = this.props
    return(
      <div>
        <Formik
          initialValues = {searchBarInitialValues}
          onSubmit = {handleSubmit}
          render = {() => {
            return (
              <span>
                <Form className="form-inline">
                  <Input
                    type="text"
                    name="searchQuery"
                    placeholder={"Try: Chicken"}
                    searchbar
                  />
                  {/* <Button searchbar type="submit">
                    <span className="f-aic f-jcc">
                      <i
                        style={{ color: "white", marginRight: 5 }}
                        className="fas fa-search m-r-"
                      />
                      <Text white>Go</Text>
                    </span>
                  </Button> */}
                </Form>
              </span>
            )
          }}
        />
      </div>
    )
  }
}

export default connect(null, { fetchRecipes })(SearchBar)
