/**
 * Created by devika on 2/12/15.
 */
//ReactDOM.render(
//    <div id="plan">
//        Hello
//    </div>,
//    document.getElementById('example')
//);

var loadPlan = function (context) {
    $.get(context.props.url, function (data) {
        context.setState({plan: data});
    }.bind(context));
};

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

var Plan = React.createClass({
    getInitialState: function () {
        //TODO: Bad thing...see if can be changed
        return {plan: {name: '', product: {}}};
    },
    componentDidMount: function () {
        loadPlan(this);
    },
    render: function () {
        return ( <div className="col-md-4">
            <div id="plan" className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.plan.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="col-md-6">{this.state.plan.product.name}</div>
                    <div className="col-md-6">{this.state.plan.product.value}</div>
                </div>
            </div>
        </div>);
    }
});

ReactDOM.render(
    <Plan url="/plan"></Plan>,
    document.getElementById('example')
);
