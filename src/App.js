import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage.js';
import LandingPage from './pages/Landingpage.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import Navigation from './components/Navigation.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';

import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [storageData, setStorageData] = useLocalStorage('storageData', []);

  function handleData(formData) {
    const data = [formData, ...storageData];
    setStorageData(data);
    navigate('/', { replace: true });
  }

  function handleDelete(id) {
    const newData = storageData.filter(storeddata => storeddata.id !== id);
    setStorageData(newData);
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <Routes>
          <Route path="/" exact={true} element={<LandingPage />} />
          <Route
            path="/FormPage"
            element={<FormPage handleData={handleData} />}
          />
          <Route
            path="/LikedFoodpage"
            element={
              <LikedFoodPage
                storageData={storageData}
                handleDelete={handleDelete}
              />
            }
          />
          <Route
            path="/UnLikedFoodpage"
            element={
              <UnLikedFoodPage
                storageData={storageData}
                handleDelete={handleDelete}
              />
            }
          />
        </Routes>
        {pathname !== '/' && <Navigation />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
