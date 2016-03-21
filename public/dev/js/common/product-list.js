'use strict';

var React = require('react');
var LazyLoad = require('react-lazy-load');


var ProductList = React.createClass({
    render:function() {
        let data = this.props.data;
        return (
            <div className="product-list">
                {data.map((item,i) => {
                    if(i % 2 === 0) {
                        return <ul>
                            <li><a href={data[i].url}><LazyLoad><img src={data[i].src} /></LazyLoad></a><h4><a href={data[i].url}>{data[i].name}</a></h4><strong>￥{data[i].price}</strong></li>
                            <li><a href={data[i+1].url}><LazyLoad><img src={data[i+1].src} /></LazyLoad></a><h4><a href={data[i+1].url}>{data[i+1].name}</a></h4><strong>￥{data[i+1].price}</strong></li>
                            </ul>;
                    }
                })}
            </div>
        );
    }
});

module.exports = ProductList;