import React, { Component } from 'react'
import { RecipeCard, Text } from '../components'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { user } = this.props
    if (!user) {
      return <Text>Loading Animation</Text>
    }
    return (
      //TODO: Fix the alignment problems
      <div className="container-fluid" style={{minHeight: '100vh', marginTop: "2.5em" }}>

        <div className="row fadein">
          <div className="col-xs-12 col-sm-10 offset-sm-1">
            <div className="row">
              <Text huge green>Welcome back, {user.firstName}</Text>
            </div>
            <div className="row" style={{marginTop: "1.5em"}}>
              <Text medium black>Favorites:</Text>
              <div
                className="flexbox"
                style={{
                  display: 'flex',
                  minHeight: 'wrap-content',
                  overflowX: 'auto',
                  padding: '0.5em'}}
              >
              <RecipeCard
                imgSrc="https://rasamalaysia.com/wp-content/uploads/2012/10/chicken-teriyaki.jpg"
                title="Chicken Teriyaki with Asparagus and Mashed Potatoes"
                description="Very tasty!"
                time="30 minutes"
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
                imgSrc="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/6/8/2/FNM_070110-Try-This-at-Home-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371592877408.jpeg"
                title="Pulled Pork Sandwiches"
                description="Super tasty!"
                time="10 minutes"
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

            <div className="row" style={{marginTop: "1.25em"}}>
              <Text medium black>Recommended for you:</Text>
              <div className="flexbox" style={{display: 'flex', minHeight: 'wrap-content', overflowX: 'auto', padding: '0.5em'}}>
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

            <div className="row" style={{marginTop: "1.25em"}}>
              <Text medium black>Popular:</Text>
              <div className="flexbox" style={{display: 'flex', minHeight: 'wrap-content', overflowX: 'auto', padding: '0.5em'}}>
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

export default connect(mapStateToProps)(Dashboard);
