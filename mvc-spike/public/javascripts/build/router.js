/**
 * Created by devika on 2/12/15.
 */

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Router,
        null,
        React.createElement(Route, {path: "/", component: App}),
        React.createElement(Route, {path: "/change", component: Change}),
        React.createElement(Route, {path: "/cart", component: Cart})
    )
), document.body);