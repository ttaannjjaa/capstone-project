import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import UnLikedFoodPage from './pages/UnLikedFoodPage.js';
import FormPage from './pages/FormPage.js';

const initialDataObject = {
  foodName: '',
  foodTaste: '',
  foodStyle: '',
  foodJudge: true,
};

function App() {
  const [formData, setFormData] = useState(initialDataObject);
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate('');

  function handleSubmit(formData) {
    const data = [formData, ...allData];
    setAllData(data);
    handleFormReset();
    navigate('/', { replace: true });
  }

  const [version, setVersion] = useState(0);
  function handleFormReset() {
    setVersion(version => version + 1);
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <Routes>
          <Route
            path="/FormPage"
            element={
              <FormPage
                version={version}
                handleSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route path="/" element={<LikedFoodPage allData={allData} />} />
          <Route path="/UnLikedFoodpage" element={<UnLikedFoodPage />} />
        </Routes>
        <Navigation />
      </div>
    </ErrorBoundary>
  );
}

export default App;
