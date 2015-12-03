var addPlanToCart = function (context) {
    context.setState({status: "loading"});
    $.post('/cart/add', {planId: context.props.plan.id}, (function () {
        setTimeout(function () {
            context.setState({status: "success"});
        }, 5000);
    }).bind(context));
};

PlanItem = React.createClass({
    displayName: "PlanItem",

    getInitialState: function () {
        return {status: 'initial'};
    },
    handleClick: function () {
        addPlanToCart(this);
    },
    render: function () {
        if (this.state.status == "success") {
            this.props.onPlanAdded();
        }
        return React.createElement(
            "div",
            {className: "col-md-4"},
            React.createElement(Plan, {plan: this.props.plan}),
            React.createElement(AddToCartButton, {onClick: this.handleClick.bind(this), status: this.state.status})
        );
    }
});