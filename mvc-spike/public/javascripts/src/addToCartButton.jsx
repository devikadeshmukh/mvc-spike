AddToCartButton = React.createClass({
    render: function () {
        var addToCart = <button className="btn btn-primary" onClick={this.props.onClick}>Add to cart</button>
        if (this.props.status == 'loading') {
            addToCart = <button className="btn btn-warning">
                <span className="glyphicon glyphicon-refresh"></span>
                Loading...</button>
        } else if (this.props.status == "success") {
            addToCart = <button className="btn btn-success">
                <span className="glyphicon glyphicon-ok"></span>
                Done</button>
        }
        return addToCart;
    }
});