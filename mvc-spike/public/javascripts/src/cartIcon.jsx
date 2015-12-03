var addToCartEvent = '';

CartIcon = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    componentDidMount: function () {
        addToCartEvent = EventMap.register("addToCart", function () {
            this.setState({count: this.state.count + 1});
        }.bind(this));
    },
    componentWillUnmount: function () {
        addToCartEvent();
    },
    render: function () {
        return (
            <div>
                <i className="glyphicon glyphicon-shopping-cart"></i> {this.state.count}
            </div>
        );
    }
});