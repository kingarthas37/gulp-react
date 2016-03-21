'use strict';

var React = require('react');

var IndexNav = React.createClass({
    render:function() {
        return (
            <div className="nav">
                <div>
                    <ul>
                        <li><a href="#"><img src="/public/dist/images/index/nav-1.png" alt="外套"/><span>外套</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-2.png" alt="上衣"/><span>上衣</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-3.png" alt="裤子"/><span>裤子</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-4.png" alt="裙子"/><span>裙子</span></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src="/public/dist/images/index/nav-5.png" alt="童鞋"/><span>童鞋</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-6.png" alt="包/配饰"/><span>包/配饰</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-7.png" alt="泳衣/内衣/睡衣"/><span>泳衣/内衣/睡衣</span></a></li>
                        <li><a href="#"><img src="/public/dist/images/index/nav-8.png" alt="全部单品"/><span>全部单品</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = IndexNav;