import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';
import FormPage from './pages/FormPage.js';
import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const navigate = useNavigate('');
  const [storageData, setStorageData] = useLocalStorage('storageData', []);

  function handleData(formData) {
    const data = [formData, ...storageData];
    setStorageData(data);
    navigate('/', { replace: true });
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <Routes>
          <Route path="/" element={<FormPage handleData={handleData} />} />
          <Route
            path="/LikedFoodpage"
            element={<LikedFoodPage storageData={storageData} />}
          />
          <Route
            path="/UnLikedFoodpage"
            element={<UnLikedFoodPage storageData={storageData} />}
          />
        </Routes>
        <Navigation />
      </div>
    </ErrorBoundary>
  );
}

export default App;
