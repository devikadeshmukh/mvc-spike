/**
 * Created by devika on 2/12/15.
 */

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render(
    <div>
        <Router>
            <Route path="/" component={App}></Route>
            <Route path="/change" component={Change}></Route>
            <Route path="/cart" component={Cart}></Route>
        </Router>
    </div>,
    document.body);