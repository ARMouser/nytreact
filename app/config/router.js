var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main.js");
var Results = require('../components/Results.js');
var Saved = require("../components/Saved.js");
var Search = require("../components/Search.js");

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="search" component={Search} />
            <Route path="saved" component={Saved} />
            <Route path="results" component={Results} />
            <IndexRoute component={search} />
        </Route>
    </Router>
);