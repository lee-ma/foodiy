import React from 'react';
import { Input, Button } from './index';
import { Formik, Form } from 'formik';

const searchBarInitialValues = {
  searchQuery: ""
}

class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <Formik
          initialValues = {searchBarInitialValues}
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
