var addToCartEvent = '';

CartIcon = React.createClass({
    displayName: "CartIcon",

    getInitialState: function () {
        return {count: 0};
    },
    componentDidMount: function () {
        addToCartEvent = EventMap.register("addToCart", (function () {
            this.setState({count: this.state.count + 1});
        }).bind(this));
    },
    componentWillUnmount: function () {
        addToCartEvent();
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("i", {className: "glyphicon glyphicon-shopping-cart"}),
            " ",
            this.state.count
        );
    }
});