import { ErrorBoundary } from 'react-error-boundary';
import LikedFoodPage from './components/LikedFoodPage.js';
import ErrorFallback from './ErrorFallback.js';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="App">
        <LikedFoodPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
