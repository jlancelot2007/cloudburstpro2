import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Congratulations</h1>
    <p>Your purchase from Cloudburstpro has been successful!</p>
    <p>Check your e-mail address for the receipt that has been mailed to you</p>
    <p>If a receipt has not been received please contact us by e-mail to request a duplicate.</p>
    <p>Once again thank you for your business - it is a pleasure to serve you.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
