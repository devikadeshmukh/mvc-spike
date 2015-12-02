var Link = ReactRouter.Link;

var loadPlans = function (context) {
    $.get(context.props.url, (function (data) {
        context.setState({ plans: data });
    }).bind(context));
};

PlanList = React.createClass({
    displayName: "PlanList",

    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return { plans: [] };
    },
    componentDidMount: function () {
        loadPlans(this);
    },
    render: function () {
        var plans = this.state.plans.map(function (plan) {
            return React.createElement(
                "div",
                {className: "col-md-4"},
                React.createElement(Plan, {plan: plan}),
                React.createElement(
                    Link,
                    {to: 'cart'},
                    "Add to cart"
                )
            );
        });

        return React.createElement(
            "div",
            null,
            plans
        );
    }
});