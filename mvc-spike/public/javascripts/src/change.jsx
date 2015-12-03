Change = React.createClass({
    render: function () {
        return (
            <div>
                <div className="well">
                    <CartIcon></CartIcon>
                </div>
                <PlanList url="/plans"></PlanList>
            </div>
        );
    }
});