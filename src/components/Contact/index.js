import React from 'react'
import axios from 'axios'

var msg = JSON.stringify({
  text: 'This is a test message',
})

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: {
  //       'form-name': 'contact',
  //       ...this.state,
  //     },
  //   }).catch(error => alert(error))
  // }

  handleSubmit = e => {
    e.preventDefault()
    axios.post('/.netlify/functions/mailer', msg)
  }

  render() {
    return (
      <div>
        <form name="contact" method="post" onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}
