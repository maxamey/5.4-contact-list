import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){

    return {
      contacts: [
        {
          firstName: "Hugo",
          lastName: "Reyes",
          image: "hurley.jpg",
          email: "hurley@mrclucks.com",
          phone: "(481) 516 2342",
          location: "Miami FL"
        },
        {
          firstName: "Jack",
          lastName: "Shephard",
          image: "jack.jpg",
          email: "jshephard@st.sebastian.com",
          phone: "(481) 516 2342",
          location: "Los Angeles CA",
        },
        {
          firstName: "Katherine",
          lastName: "Austen",
          image: "kate.jpg",
          email: "freckles@hotmail.com",
          phone: "(481) 516 2342",
          location: "Ames IA"
        },
        {
          firstName: "James",
          lastName: "Ford",
          image: "sawyer.jpg",
          email: "sawyer_hustle@gmail.com",
          phone: "(481) 516 2342",
          location: "Jasper AL"
        },
        {
          firstName: "Benjamin",
          lastName: "Linus",
          image: "ben.jpg",
          email: "blinus@dharma.init.org",
          phone: "(481) 516 2342",
          location: "Portland OR"
        },
        {
          firstName: "John",
          lastName: "Locke",
          image: "john.jpg",
          email: "icandoit@gmail.com",
          phone: "(481) 516 2342",
          location: "Tustin CA"
        },
        {
          firstName: "Sun-Hwa",
          lastName: "Kwon",
          image: "sun.jpg",
          email: "bpobpo@daum.net",
          phone: "(481) 516 2342",
          location: "Seoul South Korea"
        },
        {
          firstName: "Jin-Soo",
          lastName: "Kwon",
          image: "jin.jpg",
          email: "jsk@paik.auto.com",
          phone: "(481) 516 2342",
          location: "Namhae South Korea"
        },
      ]
    }
  },
  render() {
    let contactData = this.props.contacts
    return (
      <main className="container">
        <div className="title__bar">
          <h2 className="title__text">
            Contacts
          </h2>
        </div>
        <ul className="contacts__list">
          { contactData.map((contact, i) => {
            return <Link to={ `/contact/${contact.firstName}/${contact.lastName}/${contact.image}/${contact.email}/${contact.phone}/${contact.location}` }
                         className="cotact__route">
              <li key={i}
                className="contacts__item">
                  <img src={ `../images/${contact.image}` }
                     className="contacts__item--image"/>
                <h3 className="contacts__item--text">
                  { contact.firstName + " " + contact.lastName }
                </h3>
              </li>
            </Link>
          })}
        </ul>
      </main>
    )
  }
})
