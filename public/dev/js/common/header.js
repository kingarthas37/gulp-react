'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
    render: function() {
        return <header className="am-g">
            <div className="am-u-sm-2 am-text-left col-back">
                <a href="#" className="logo">KIDS</a>
            </div>
            <div className="am-u-sm-8 am-text-center col-title">
                <form action="search.php">
                    <input type="submit" className="submit" value="搜索"/>
                    <input type="text" className="search" name="key" placeholder="搜索海淘商品"/>
                </form>
            </div>
            <div className="am-u-sm-2 am-text-right col-right">
                <a className="btn-cart icon-header-cart" href="cart.php">
                </a>
            </div>
        </header>;ª
    }
});

if(document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}