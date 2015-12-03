var loadCart = function (context) {
    $.get('/cart', function (data) {
        context.setState({cart: data, plan: context.state.plan});
    }.bind(context));
};

var loadCurrentPlan = function (context) {
    $.get('/plan', function (data) {
        context.setState({plan: data, cart: context.state.cart});
    }.bind(context));
};

Checkout = React.createClass({
    getInitialState: function () {
        return {cart: {items: []}, plan: {product: []}};
    },
    componentDidMount: function () {
        loadCurrentPlan(this);
        loadCart(this);
    },
    render: function () {
        var items = this.state.cart.items.map(function (item) {
            return (
                <div>
                    <Plan plan={item}></Plan>
                </div>
            );
        });
        return (
            <div>
                <span>Current plan: </span>
                <Plan plan={this.state.plan}></Plan>
                <span>Plans in the cart: </span>
                {items}
            </div>
        )
    }
});