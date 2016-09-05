import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    //defining the path to the info i need in this scope
    let contactData = this.props.params;
    return (
      <div className="contact__container">
        <header className="header__container">
          <Link to="/"
                className="backButton">
            back
          </Link>
          <img src={ `../images/${contactData.image}`}
               className="contact__image" />
        </header>
        <ul className="info__container">
          <li className="contact__item">
            <span> {contactData.namef}   {contactData.namel} </span>
          </li>
          <li className="contact__item">
            <span> {contactData.email} </span>
          </li>
          <li className="contact__item">
            <span> {contactData.phone} </span>
          </li>
          <li className="contact__item">
            <span> {contactData.location} </span>
          </li>
        </ul>
      </div>

    )
  }
})
