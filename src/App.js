import { lazy, Suspense } from 'react';

import './App.css';

const Header = lazy(() => import('./components/Header'));
const Herocomponent = lazy(() => import('./components/Herocomponent'));
const Description = lazy(() => import('./components/Description'));
const Usecases = lazy(() => import('./components/Usecase.jsx')); 
const Offers=lazy(() =>import("./components/Offers"));
const Carousel=lazy(()=>import('./components/Carousel'))
const Platform = lazy(() => import('./components/Platform'));
const Signup = lazy(() => import('./components/Signup.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Herocomponent />
      <Description />
      <Usecases />  
      <Offers />
      <Carousel />
      <Platform />
      <Signup />
      <Footer />

    </Suspense>
  );
}

export default App;
