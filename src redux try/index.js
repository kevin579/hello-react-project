import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';
import { Counter } from './actions';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App/>;
    </Provider>
);

// store.subscribe(()=>{
//     root.render(<App/>)

// })
