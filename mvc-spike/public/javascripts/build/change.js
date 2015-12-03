Change = React.createClass({
    displayName: "Change",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                {className: "well"},
                React.createElement(CartIcon, null)
            ),
            React.createElement(PlanList, {url: "/plans"})
        );
    }
});