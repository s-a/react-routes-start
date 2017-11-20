import Sandwiches from './Sandwiches.jsx';
import Bus from './Bus.jsx';
import Cart from './Cart.jsx';
import Tacos from './Tacos.jsx';
import Main from './Main.jsx';

const routes = [
    {
        path: '/:locale',
        component: Main
    },
    {
        path: '/:locale/sandwiches',
        component: Sandwiches
    },
    {
        path: '/:locale/tacos',
        component: Tacos,
        routes: [
            {
                path: '/:locale/tacos/bus',
                component: Bus
            },
            {
                path: '/:locale/tacos/cart',
                component: Cart
            }
        ]
    }
]




export default routes;
