var Link = ReactRouter.Link;

var loadPlan = function (context) {
    $.get(context.props.url, (function (data) {
        context.setState({ plan: data });
    }).bind(context));
};

UserPlan = React.createClass({
    displayName: 'UserPlan',

    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return { plan: { name: '', product: {} } };
    },
    componentDidMount: function () {
        loadPlan(this);
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(Plan, { plan: this.state.plan }),
            React.createElement(
                Link,
                { to: '/change' },
                'Change Plan'
            )
        );
    }
});