import AboutUs from '../components/AboutUs';
import Home from '../components/Home';
import Products from '../components/Products';
import Privacy from '../components/Privacy';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
  },
];

