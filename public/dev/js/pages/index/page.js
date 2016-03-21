'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../../common/header');
var Nav = require('../../common/nav');
var Slider = require('../../common/slider');

var IndexNav = require('./nav');

var IndexComponent = React.createClass({
    render:function() {
        return (
            <div className="index-page">
                <Header/>
                <Nav currentPage={this.props.currentPage} />
                <Slider/>
                <IndexNav/>
            </div>
        );
    }
});


module.exports = args => {
    ReactDOM.render(<IndexComponent {...args} />,document.body);
};