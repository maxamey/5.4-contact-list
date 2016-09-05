import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){

    return {
      contacts: [
        {
          firstName: "Hugo",
          lastName: "Reyes",
          image: "lost-hugo-chicken.jpg",
          email: "hurley@mrclucks.com",
          phone: "(481)516-2342",
          location: "Miami FL"
        },
        {
          firstName: "Jack",
          lastName: "Shephard",
          image: "jack.jpg",
          email: "jshephard@st.sebastian.com",
          phone: "(481)516-2342",
          location: "Los Angeles CA",
        },
        {
          firstName: "Katherine",
          lastName: "Austen",
          image: "kate.jpeg",
          email: "misskate@hotmail.com",
          phone: "(481)516-2342",
          location: "Ames IA"
        },
        {
          firstName: "James",
          lastName: "Ford",
          image: "sawyer.jpg",
          email: "sawyer_hustle@gmail.com",
          phone: "(481)516-2342",
          location: "Jasper AL"
        },
        {
          firstName: "Benjamin",
          lastName: "Linus",
          image: "ben.jpg",
          email: "blinus@dharma.init.gov",
          phone: "(481)516-2342",
          location: "Portland OR"
        },
      ]
    }
  },
  render() {
    let contactData = this.props.contacts
    return (
      <main className="container">
        <heading className="title__bar">
          <h2 className="title__text">
            Homies
          </h2>
        </heading>
        <ul className="contacts__list">
          { contactData.map((contact, i) => {
            return <li key={i}
                       className="contact__item">
              <Link to={ `/contact/${contact.firstName}/${contact.lastName}/${contact.image}/${contact.email}/${contact.phone}/${contact.location}` }>
                <img src={ `../images/${contact.image}` }
                     className="contact__item--image"/>
                <h3 className="contact__item--text">
                  { contact.firstName + " " + contact.lastName }
                </h3>
              </Link>
            </li>
          })}
        </ul>
      </main>
    )
  }
})
