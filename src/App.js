import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';

import CatInfoPage from './pages/CatInfoPage.js';
import FormPage from './pages/FormPage.js';
import LandingPage from './pages/Landingpage.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import ProfilePage from './pages/ProfilePage.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';

import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const [storageData, setStorageData] = useLocalStorage('storageData', []);

  function handleData(formData) {
    const data = [formData, ...storageData];
    setStorageData(data);
  }

  function handleDelete(id) {
    const newData = storageData.filter(storeddata => storeddata.id !== id);
    setStorageData(newData);
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route
          path="/FormPage"
          element={
            <>
              <FormPage handleData={handleData} />
              <Navigation />
            </>
          }
        />

        <Route
          path="/LikedFoodpage"
          element={
            <>
              <LikedFoodPage
                storageData={storageData}
                handleDelete={handleDelete}
              />
              <Navigation />
            </>
          }
        />
        <Route
          path="/UnLikedFoodpage"
          element={
            <>
              <UnLikedFoodPage
                storageData={storageData}
                handleDelete={handleDelete}
              />
              <Navigation />
            </>
          }
        />
        <Route
          path="/ProfilePage"
          element={
            <>
              <ProfilePage />
              <Navigation />
            </>
          }
        />
        <Route path="/CatInfoPage" element={<CatInfoPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
