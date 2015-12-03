AddToCartButton = React.createClass({
    displayName: "AddToCartButton",

    render: function () {
        var addToCart = React.createElement(
            "button",
            {className: "btn btn-primary", onClick: this.props.onClick},
            "Add to cart"
        );
        if (this.props.status == 'loading') {
            addToCart = React.createElement(
                "button",
                {className: "btn btn-warning"},
                React.createElement("span", {className: "glyphicon glyphicon-refresh"}),
                " Loading..."
            );
        } else if (this.props.status == "success") {
            addToCart = React.createElement(
                "button",
                {className: "btn btn-success"},
                React.createElement("span", {className: "glyphicon glyphicon-ok"}),
                " Done"
            );
        }
        return addToCart;
    }
});