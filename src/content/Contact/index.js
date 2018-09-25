import React from 'react'
import { Link } from 'gatsby'

const ContactContent = () => (
  <>
    <p>Want to talk about anything web related? Get in touch!</p>
    <p>
      You can also find me in the{' '}
      <Link to="https://byteconf.com" target="_blank" rel="noopener noreferrer">
        Byteconf
      </Link>{' '}
      Discord server.
    </p>
  </>
)

export default ContactContent
