import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { fetchPizzas } from './redux/actions/pizza';

function App() {
    const dispatch = useDispatch();

    window.test = () => {
        dispatch(fetchPizzas());
    };

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
            </div>
        </div>
    );
}

export default App;
