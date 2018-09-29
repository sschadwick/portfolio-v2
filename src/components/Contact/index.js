import React from 'react'
import axios from 'axios'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = this.state
    const payload = JSON.stringify({
      name,
      email,
      message,
    })
    axios.post('/.netlify/functions/mailer', payload)
    this.setState({
      name: '',
      email: '',
      message: '',
      sent: true,
    })
  }

  render() {
    const { name, email, message } = this.state
    return (
      <div>
        <form name="contact" method="post" onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your name:
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button onClick={this.handleSubmit}>Send</button>
          </p>
        </form>
      </div>
    )
  }
}
