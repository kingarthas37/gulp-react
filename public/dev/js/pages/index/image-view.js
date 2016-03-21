'use strict';

var React = require('react');
var LazyLoad = require('react-lazy-load');


var ImageView = React.createClass({
    render:function() {
        return (
            <div className="image-view">
                    <div>
                        <LazyLoad><img src="/public/dist/images/index/image-view-1.jpg" alt=""/></LazyLoad>
                        <LazyLoad><img src="/public/dist/images/index/image-view-2.jpg" alt=""/></LazyLoad>
                    </div>
                    <div>
                        <LazyLoad><img src="/public/dist/images/index/image-view-3.jpg" alt=""/></LazyLoad>
                        <LazyLoad><img src="/public/dist/images/index/image-view-4.jpg" alt=""/></LazyLoad>
                    </div>
            </div>
        );
    }
});

module.exports = ImageView;