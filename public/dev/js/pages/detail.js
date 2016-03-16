'use strict';
 
var CommentForm = require('index');

var CommentForm1 = React.createClass({
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
            
            <div>
                <CommentForm />
            <form className="commentForm">
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                
                <input
                    type="text"
                    placeholder="Say dasdf something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>

            </div>
             
        );
    }
});

ReactDOM.render(
    <CommentForm1/>,document.getElementById('container')
);