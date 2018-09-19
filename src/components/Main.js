import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>My passion is to see the cloud useful to non tech organisations by using serverless solutions that integrate workflow.</p>
          <p>In practical terms that may mean starting with a simple free hosted static website like this website or a dynamic blog website hosted for US$5 per month.</p>
          <p>More complex solutions might involve:
          <ul>
          <li>user authentication</li>
          <li>online video or audio</li>
          <li>push notifications for user engagement</li>
            <li>serverless online store with payments</li>
            <li>integrations with Zoho, Slack, MailChimp, Zapier or Twilio</li>
           <li>CI/CD documentation websites</li>
          </ul>to discuss your obligation free requirements use the Contact form.</p>
         <p>You can find a list of substantial discounts on popular commercial software products available to non profit organisations here : 
          <a href="https://zapier.com/blog/best-nonprofit-discounts/">Discounts for Non Profits</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>This website was built from a Gatsby version 2 template that is pushed to Github.com from my machine. From there it is autmatically rebuilt on the hosting site at Netlify.com.</p>
          <p>Here is an example of a <a href="https://renewedlifefellowship.com.au/">node.js blogging site</a> hosted on Digital Ocean. Various templates are available to provide your styling preference.</p>
          <p>I am looking to quickly build a portfolio of reference sites so I can go freelance. Contact me if you have a project that needs help.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>My name is Andrew Plater. I have been working with AWS and related services such as Slack for about three years. Previously I worked in healthcare software development using the Microsoft stack. I hold an AWS Solutions Architect Associate certification and love to build serverless solutions to business problems.</p>
         <p>Image files are Australian landscapes photographed by Ignacio Palacios. You can see more of his work <a href="http://www.australianphotography.com/news/ignacio-palacios-announces-new-exhibition-this-month">here</a>.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="post"  data-netlify="true" data-netlify-honeypot="botfield">
            <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/jlancelot2007" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/andrew.plater.9" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/andrew-plater-56122790/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/jlancelot2007" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>
        <article id="more" className={`${this.props.article === 'more' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">More</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>If you have made it this far you must be keen to know more technical stuff.</p>
          <p><a href="https://seo-hacker.com/google-lighthouse-extension/">Lighthouse</a> is a Google extension for measuring a website. Here are Lighthouse scores out of the box for the site i.e. no SEO headers or service workers (offline caching) have been added to improve the results. In short you get a performant, accessible, well architected, discoverable website on any device that can easily be further enhanced.</p>
           <ul><li>Performance 93%</li><li>Progressive Web App 73%</li><li>Accessibility 100%</li><li>Best Practices 100%</li><li>SEO 89%</li></ul>
          <p>For custom backend development I like to use the Serverless Framework with node.js and AWS to create graphQL APIs to Lambda functions that can interact with DynamoDB, step functions and SES.</p>
          <p>Front end development with Vue.js</p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main