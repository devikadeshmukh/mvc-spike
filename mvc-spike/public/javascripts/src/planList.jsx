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
                <Plan plan={plan}></Plan>
            );
        });

        return (
            <div>{plans}</div>
        )
    }
});