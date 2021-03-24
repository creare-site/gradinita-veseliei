import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPreloaded: true,
        };
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ isPreloaded: false });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { children } = this.props;
        const { isPreloaded } = this.state;
        return ( <
            StaticQuery query = { graphql `
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        ` }
            render = {
                data => ( <
                    >
                    <
                    Helmet title = { data.site.siteMetadata.title }
                    meta = {
                        [
                            { name: 'description', content: 'Unitate de invatamant pentru ciclul prescolar, care ofera program prelungit si masa din Navodari' },
                            { name: 'keywords', content: 'gradinita, ciclu prescolar, navodari' },
                            { name: 'google-site-verification', content: 'LYgAqJqxByz3qZ8Lmozp3WFiB3YMdjaMPKw6AJuRHdA' },
                        ]
                    } >
                    <
                    html lang = "en" / >
                    <
                    /Helmet> <
                    div className = { isPreloaded ? 'main-body is-preload' : 'main-body' } > { children } <
                    /div> <
                    />
                )
            }
            />
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;