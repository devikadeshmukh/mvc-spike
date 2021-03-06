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

var getTemplate = function (context) {
    return ( <div>
        <div id="plan" className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{context.props.plan.name}</h3>
            </div>
            <div className="panel-body">
                <div className="col-md-6">{context.props.plan.product.name}</div>
                <div className="col-md-6">{context.props.plan.product.value}</div>
            </div>
        </div>
    </div>)
};

Plan = React.createClass({
    render: function () {
        return getTemplate(this);
    }
});
