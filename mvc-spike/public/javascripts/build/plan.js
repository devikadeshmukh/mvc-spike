/**
 * Created by devika on 2/12/15.
 */

//TODO: Another bad thing...see if template can be extracted out
/*var planTemplate =
 <div className="col-md-4">
 <div id="plan" className="panel panel-default">
 <div className="panel-heading">
 <h3 className="panel-title">{this.state.plan.name}</h3>
 </div>
 <div className="panel-body">
 <div className="col-md-6">{this.state.plan.product.name}</div>
 <div className="col-md-6">{this.state.plan.product.value}</div>
 </div>
 </div>
 </div>
 ;*/

Plan = React.createClass({
    displayName: "Plan",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { id: "plan", className: "panel panel-default" },
                React.createElement(
                    "div",
                    { className: "panel-heading" },
                    React.createElement(
                        "h3",
                        { className: "panel-title" },
                        this.props.plan.name
                    )
                ),
                React.createElement(
                    "div",
                    { className: "panel-body" },
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        this.props.plan.product.name
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        this.props.plan.product.value
                    )
                )
            )
        );
    }
});