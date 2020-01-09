import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent":"")}>
                <div className={"container" + (this.props.fluid !== undefined ? "-fluid":"")}>
                   
                    <p className="copyright pull-right">
                        &copy; {1900 + (new Date()).getYear()} <a href="http://www.creative-tim.com">Creative Tim</a>, made with <i className="fa fa-heart heart"></i> for a better web
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;
