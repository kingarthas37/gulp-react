'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../../common/header');
var Nav = require('../../common/nav');
var Slider = require('../../common/slider');
var ProductList = require('../../common/product-list');

var IndexNav = require('./nav');
var IndexImageView = require('./image-view');
var IndexHeadLine = require('./head-line');
var IndexImageList = require('./image-list');

var IndexComponent = React.createClass({
    render:function() {
        return (
            <div className="index-page">
                <Header/>
                <Nav nav={this.props.nav} currentPage={this.props.currentPage} />
                <Slider sliders={this.props.sliders}/>
                <IndexNav indexNav={this.props.indexNav}/>
                <IndexImageView />
                <IndexHeadLine title="recommand" />
                <IndexImageList images={this.props.imageListProduct} />
                <IndexHeadLine title="topic" />
                <IndexImageList images={this.props.imageListTopic} />
                <IndexHeadLine title="hot" />
                <ProductList data={this.props.productList} />
            </div>
        );
    }
});

module.exports = args=>{
    ReactDOM.render(<IndexComponent {...args} />,document.body);
};