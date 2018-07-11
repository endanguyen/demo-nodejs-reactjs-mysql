import React, {Component} from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="background-purple-dark w-100">
                <div className="footer container ph2 pv5-ns pv4">
                    <section className="mv5-ns mv2">
                        <span className="copyRight">© 2018 - Nexus Frontier Tech Ltd</span>
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer;
