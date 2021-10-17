import Header from './components/Header';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ShowUser from './components/ShowUser';
import EditUser from './components/EditUser';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">PaymentProcessor</a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link" activeClassName="active" exact>All Users</NavLink>
              </li>
              <li>
                <NavLink to="/add" className="nav-link" activeClassName="active">Add User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="main-content">
          <Switch>
            <Route component={Header} path="/" exact={true} />
            <Route component={UserList} path="/users" exact={true} />
            <Route component={AddUser} path="/add" exact={true} />
            <Route component={ShowUser} path="/usr/:id" />
            <Route component={EditUser} path="/edit/:id" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;