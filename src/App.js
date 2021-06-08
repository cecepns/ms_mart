import {AuthProvider} from './Config/Context/AuthContext'
import {useReducer} from 'react'
import initialState from './Config/Context/Store'
import Reducer from './Config/Context/Reducer'

// PAGES
import {
    Home,
    Login,
    Register,
    Admin,
    Product,
    Categories
} from './Pages'

// ROUTER
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

    const [store,
        setStore] = useReducer(Reducer, initialState)

    return (
        <Router>
            <AuthProvider
                value={{
                store,
                setStore
            }}>
                <Switch>
                    <Route path="/admin/product/categories">
                        <Categories/>
                    </Route>
                    <Route path="/admin/product">
                        <Product/>
                    </Route>
                    <Route path="/admin">
                        <Admin/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    )
}
