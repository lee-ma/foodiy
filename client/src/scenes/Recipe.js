import React from 'react'
import { Text, RecipeInformationCard } from '../components'
import axios from 'axios'

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/recipes/${id}`)
      .then(res => this.setState({
        recipe: res.data
      }))
  }

  render() {
    const { recipe } = this.state
    console.log(recipe)
    if (!recipe) return null
    return(
      <div className="container-fluid" style={{ marginTop: "2.5em" }}>
        <div className="row">
          <div className="col-xs-12 col-md-8" style={{ marginBottom: "1em" }}>
            <div style={{
              backgroundImage: `url(https://i.redd.it/oseacqjlboky.png)`,
              width: '100%',
              paddingBottom: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0' }}
            />
            <Text big bold>{recipe.title}</Text>
            <Text grey>{recipe.description}</Text>
            {window.innerWidth < 770 && <hr />}
          </div>
          <div className="col-xs-12 col-md-4">
            <RecipeInformationCard recipe={recipe} />
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
