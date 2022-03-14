import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';
import FormPage from './pages/FormPage.js';

function App() {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate('');

  function handleData(formData) {
    const data = [formData, ...allData];
    setAllData(data);
    navigate('/', { replace: true });
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <Routes>
          <Route path="/" element={<FormPage handleData={handleData} />} />
          <Route
            path="/LikedFoodpage"
            element={<LikedFoodPage allData={allData} />}
          />
          <Route
            path="/UnLikedFoodpage"
            element={<UnLikedFoodPage allData={allData} />}
          />
        </Routes>
        <Navigation />
      </div>
    </ErrorBoundary>
  );
}

export default App;
