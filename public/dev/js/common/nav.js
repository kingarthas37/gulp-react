'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

//dom
var $nav = $('#nav');

var Nav = React.createClass({
    getInitialState: function() {
        return {
            currentClass:''
        };
    },
    render: function() {
        return <nav>
            <a href="#" className={this.current('index')}><span>推荐</span></a>
            <a href="#" className={this.current('topic')}><span>专题</span></a>
            <a href="#" className={this.current('news')}><span>本周新品</span></a>
            <a current="ranks" href="#" className={this.current('ranks')}><span>热卖排行</span></a>
            <a current="brand" href="#" className={this.current('brand')}><span>品牌</span></a>
        </nav>;
    },
    current:current=>{
        if($nav.attr('data-current') === current) {
            return 'current';
        }
        return '';
    }
    
});

 

ReactDOM.render(<Nav />,document.getElementById('nav'));