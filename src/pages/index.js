import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Random Content<br />
                  Random Content
                </h2>
              </header>
              <p>
                I'm Nurul Sundarani an IT Engineering Student from L.D College
                of Engineering Ahmedabad. I am an avid follower of Indian
                Cricket team and Specially Virat Kohli. I Love to play
                cricket,Unless Playing has a vast meaning!!
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-bolt" />
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro" />
                </li>
                <li>
                  <span className="icon style4 major fa-cog" />
                </li>
                <li>
                  <span className="icon style5 major fa-desktop" />
                </li>
                <li>
                  <span className="icon style6 major fa-calendar" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Another good Conetnt Title</h2>
              </header>
              <p>
                I'm Nurul Sundarani an IT Engineering Student from L.D College
                of Engineering Ahmedabad. I am an avid follower of Indian
                Cricket team and Specially Virat Kohli. I Love to play
                cricket,Unless Playing has a vast meaning!!.
              </p>
              <p>
                I'm Nurul Sundarani an IT Engineering Student from L.D College
                of Engineering Ahmedabad. I am an avid follower of Indian
                Cricket team and Specially Virat Kohli. I Love to play
                cricket,Unless Playing has a vast meaning!!.
              </p>
              <p>
                I'm Nurul Sundarani an IT Engineering Student from L.D College
                of Engineering Ahmedabad. I am an avid follower of Indian
                Cricket team and Specially Virat Kohli. I Love to play
                cricket,Unless Playing has a vast meaning!!
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>This is Content</h2>
              </header>
              <p>This is different Conetnt</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Random Heading</h3>
              <p>
                I am an avid follower of Indian Cricket team and Specially Virat
                Kohli.I Love to play cricket,Unless Playing has a vast meaning!!
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Random Heading</h3>
              <p>
                I am an avid follower of Indian Cricket team and Specially Virat
                Kohli.I Love to play cricket,Unless Playing has a vast
                meaning!!.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Random Heading</h3>
              <p>
                I am an avid follower of Indian Cricket team and Specially Virat
                Kohli.I Love to play cricket,Unless Playing has a vast meaning!!
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Wanna Signup?</h2>
            </header>
            <p>Totally irrelevant content I have no idea!.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
