import './App.css';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('./components/Header'));
const Herocomponent = lazy(() => import('./components/Herocomponent'));
const Description = lazy(() => import('./components/Description'));
const Usecases = lazy(() => import('./components/usecase')); 
const Offers=lazy(() =>import("./components/Offers"));
const Carousel=lazy(()=>import('./components/Carousel'))
const Platform = lazy(() => import('./components/platform'));
const Signup = lazy(() => import('./components/signup'));
const Footer = lazy(() => import('./components/footer'));

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
