App = React.createClass({
    displayName: "App",

    render: function () {
        return React.createElement(UserPlan, { url: "/plan" });
    }
});