var React = require('react');
var Link = require('react-router').Link;

var Search = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" />
                <button id="submit">Submit</button>
            </form>

        );
    }
});

module.exports = Search;