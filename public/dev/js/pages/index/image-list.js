'use strict';

var React = require('react');
var LazyLoad = require('react-lazy-load');


var ImageView = React.createClass({
    render:function() {
        return (
            <ul className="image-list">
                {this.props.images.map(item => {
                    return <li>
                        <a href={item.url}><LazyLoad><img src={item.src} /></LazyLoad></a>
                    </li>;
                })}
            </ul>
        );
    }
});

module.exports = ImageView;