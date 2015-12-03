var loadCart = function (context) {
    $.get('/cart', (function (data) {
        context.setState({cart: data, plan: context.state.plan});
    }).bind(context));
};

var loadCurrentPlan = function (context) {
    $.get('/plan', (function (data) {
        context.setState({plan: data, cart: context.state.cart});
    }).bind(context));
};

Checkout = React.createClass({
    displayName: 'Checkout',

    getInitialState: function () {
        return {cart: {items: []}, plan: {product: []}};
    },
    componentDidMount: function () {
        loadCurrentPlan(this);
        loadCart(this);
    },
    render: function () {
        var items = this.state.cart.items.map(function (item) {
            return React.createElement(
                'div',
                null,
                React.createElement(Plan, {plan: item})
            );
        });
        return React.createElement(
            'div',
            null,
            React.createElement(
                'span',
                null,
                'Current plan: '
            ),
            React.createElement(Plan, {plan: this.state.plan}),
            React.createElement(
                'span',
                null,
                'Plans in the cart: '
            ),
            items
        );
    }
});