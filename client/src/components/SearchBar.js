import React from 'react';
import {Input, Text, Button} from './index';
import {Formik, Form} from 'formik';
import { connect } from 'react-redux'

class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <Formik
          initialValues = {""}
          onSubmit = {(searchTerm) => console.log(searchTerm)}
          render = {() => {
            return (
              <span>
                <Form className="form-inline">
                  <Input type="text" name="searchQuery" placeholder={"Try: Chicken"} searchbar/>
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

export default SearchBar;
