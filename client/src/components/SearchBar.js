import React, { Component } from 'react'
import { Input, Button } from 'components'
import { Formik, Form } from 'formik'
import { connect } from 'react-redux'
import { fetchRecipes } from 'actions'

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
                  <Input type="text" name="searchQuery" placeholder={"Try: Chicken"}
                    searchbar
                  />
                  <Button searchbar type="submit"><i className="fas fa-search"></i></Button>
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
