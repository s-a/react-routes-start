

import Sandwiches from './Sandwiches.jsx';

import Bus from './Bus.jsx';
import Cart from './Cart.jsx';
import Tacos from './Tacos.jsx';





const routes = [{
    path: '/sandwiches',
    component: Sandwiches
},
{
    path: '/tacos',
    component: Tacos,
    routes: [{
        path: '/tacos/bus',
        component: Bus
    },
    {
        path: '/tacos/cart',
        component: Cart
    }
    ]
}
]




export default routes;
