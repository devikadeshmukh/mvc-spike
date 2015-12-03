var Link = ReactRouter.Link;

var loadPlans = function (context) {
    $.get(context.props.url, function (data) {
        context.setState({plans: data});
    }.bind(context));
};

PlanList = React.createClass({
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
            return (
                <PlanItem plan={plan} onPlanAdded={this.planAdded}></PlanItem>
            );
        }, this);

        return (
            <div>
                {plans}
                <Link to={'checkout'}>Checkout</Link>
            </div>
        )
    }
});