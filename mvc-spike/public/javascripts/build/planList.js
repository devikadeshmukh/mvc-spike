var Link = ReactRouter.Link;

var loadPlans = function (context) {
    $.get(context.props.url, (function (data) {
        context.setState({ plans: data });
    }).bind(context));
};

PlanList = React.createClass({
    displayName: 'PlanList',

    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return {plans: [], status: 'initial'};
    },
    componentDidMount: function () {
        loadPlans(this);
    },
    planAdded: function (id) {
        EventMap.raise("addToCart");
    },
    render: function () {
        var plans = this.state.plans.map(function (plan) {
            return React.createElement(PlanItem, {plan: plan, onPlanAdded: this.planAdded});
        }, this);

        return React.createElement(
            'div',
            null,
            plans,
            React.createElement(
                Link,
                {to: 'checkout'},
                'Checkout'
            )
        );
    }
});