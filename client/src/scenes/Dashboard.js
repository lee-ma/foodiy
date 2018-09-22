import React, { Component } from 'react'
import { RecipeCard, Text } from 'components'
import { connect } from 'react-redux'
import _ from 'lodash'

class Dashboard extends Component {
  renderMyRecipes = () => {
    const { recipes } = this.props.user
    if (!_.isEmpty(this.props.user.recipes)) {
      return recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          imgSrc={recipe.images[0]}
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
          href={`/recipes/${recipe.id}`}
        />
      ))
    }
  }
  render() {
    const { user } = this.props
    if (!user) {
      return <Text>Loading Animation</Text>
    }
    return (
      //TODO: Fix the alignment problems
      <div className="container-fluid" style={{ minHeight: '100vh', marginTop: "2.5em" }}>

        <div className="row fadein">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            <div className="row">
              <Text huge green>Welcome back, {user.firstName}</Text>
            </div>
            <div className="row" style={{ marginTop: "1.5em" }}>
              <Text medium black block>My Recipes:</Text>
              <div
                className="flexbox"
                style={{
                  display: 'flex',
                  minHeight: 'wrap-content',
                  overflowX: 'auto',
                  padding: '0.5em'  }}>
                {this.renderMyRecipes()}
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.25em" }}>
              <Text medium black block>Recommended for you:</Text>
              <div className="flexbox"
                style={{
                  display: 'flex',
                  minHeight: 'wrap-content',
                  overflowX: 'auto',
                  padding: '0.5em' }}>
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://i.redd.it/oseacqjlboky.png"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.25em" }}>
              <Text medium black block>Popular:</Text>
              <div className="flexbox" style={{ display: 'flex', minHeight: 'wrap-content', overflowX: 'auto', padding: '0.5em' }}>
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://i.redd.it/oseacqjlboky.png"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
                <RecipeCard
                  imgSrc="https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"
                  title="title"
                  description="description"
                  time="12345"
                  href="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard)
