var Link = ReactRouter.Link;

var loadPlan = function (context) {
    $.get(context.props.url, function (data) {
        context.setState({plan: data});
    }.bind(context));
};

UserPlan = React.createClass({
    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return {plan: {name: '', product: {}}};
    },
    componentDidMount: function () {
        loadPlan(this);
    },
    render: function () {
        return (
            <div>
                <Plan plan={this.state.plan}></Plan>
                <Link to={'/change'}>Change Plan</Link>
            </div>
        );
    }
});