import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route } from 'react-router-dom';
import LikedFoodPage from './pages/LikedFoodPage.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<LikedFoodPage />} />
        <Route path="/UnLikedFoodpage" element={<UnLikedFoodPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
