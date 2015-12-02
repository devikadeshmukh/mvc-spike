var Link = ReactRouter.Link;

var loadPlans = function (context) {
    $.get(context.props.url, function (data) {
        context.setState({plans: data});
    }.bind(context));
};

PlanList = React.createClass({
    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return {plans: []};
    },
    componentDidMount: function () {
        loadPlans(this);
    },
    render: function () {
        var plans = this.state.plans.map(function (plan) {
            return (
                <div className="col-md-4">
                    <Plan plan={plan}></Plan>
                    <Link to={'cart'}>Add to cart</Link>
                </div>
            );
        });

        return (
            <div>{plans}</div>
        )
    }
});