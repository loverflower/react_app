import { lazy, Suspense } from 'react';
import './App.css';
import { useDevice } from './hooks/useDevice';
import { Devices } from './enum/Devices';
import Header from './components/header/header';
import RouterApp from './router/routerApp';

const MobileLayout = lazy(() => import('./layouts/mobile/mobileLayout'));
const DesktopLayout = lazy(() => import('./layouts/desktop/desktopLayout'));

function App() {
  const device = useDevice();

  if (device === Devices.Unknown) {
    return <div>Getting current device...</div>
  }

  const componentToRender =
   <>
     <Header/>
     <RouterApp/>
   </>

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        {device === Devices.Mobile ?
          <MobileLayout>{componentToRender}</MobileLayout> :
          <DesktopLayout>{componentToRender}</DesktopLayout>}
      </div>
    </Suspense>

  );
}

export default App;

