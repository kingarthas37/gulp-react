'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var config = require('./config');

var Slider = React.createClass({
    getInitialState: function() {
        return {
            sliders:[]
        };
    },
    componentDidMount: function() {
        $.ajax({
            url:'https://extrabux-golden-week.leanapp.cn/1.1/functions/index-slider',
            type:'post',
            headers:config.leanAppId
        }).then(results => {
            this.setState({
                sliders:results.result
            });
            $(this.refs.root).flexslider();
        });
    },
    render: function() {
        let sliders = this.state.sliders;
        return <div data-am-widget="slider" className="am-slider am-slider-a1" ref="root">
            <ul className="am-slides">
                {
                    sliders.map(item=> {
                        return <li><a href={item.url}><img src={item.src}/></a></li>;
                    })
                }
            </ul>
        </div>;
    }
});

if(document.getElementById('slider')) {
    ReactDOM.render(<Slider />,document.getElementById('slider'));
}