import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import 'theme/InjectGlobal';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
    <AppContainer>
     <Component />
    </AppContainer>,
    document.getElementById('root')
)};

render(Router)

if(module.hot){
    module.hot.accept('Router', () => { render(Router) })
}
