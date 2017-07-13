var React = require("react");
var Link = require("react-router").Link;
import Results from "./children/Results";
import Saved from "./children/Saved";
import Search from "./children/Search";

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <div id="head"> 
                    <h1>
                        New York Times Quick Search
                    </h1>
                    <hr />
                    <h3>
                        Search and Save what is important to you!
                    </h3>
                </div>
                <Search />
                <Results />
                <Saved />
            </div>
        );
    }
});

module.exports = Main;