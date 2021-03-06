import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-bolt"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Cloudburstpro</h1>
                <p>Cloud power done well</p>
                <p><em>website | ecommerce | app integration | event management | serverless solutions | Alexa skills</em></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('purchase')}}>Purchase</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('more')}}>More</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
