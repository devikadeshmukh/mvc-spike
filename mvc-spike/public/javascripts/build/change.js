Change = React.createClass({
    displayName: "Change",

    render: function () {
        return React.createElement(PlanList, { url: "/plans" });
    }
});