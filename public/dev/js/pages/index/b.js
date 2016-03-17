'use strict';

var React = require('react');

console.log('bbbbbb');

var Test = React.createClass({
    render:()=> {
        return (
            <div>
                hi,kingarthas
            </div>
        );
    }
});

var CommentForm = React.createClass({
    getInitialState: ()=> {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function() {
        return (
            <form className="commentForm">
                <Test/>
                <input
                    type="text"
                    placeholder="Your 111 name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = CommentForm;