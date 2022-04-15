import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Navigation from './components/Navigation.js';

import CatInfoPage from './pages/CatInfoPage.js';
import DisLikedFoodPage from './pages/DisLikedFoodPage.js';
import FormPage from './pages/FormPage.js';
import LandingPage from './pages/Landingpage.js';
import LikedFoodPage from './pages/LikedFoodPage.js';
import ProfilePage from './pages/ProfilePage.js';

import useLocalStorage from './hooks/useLocalStorage.js';
import { useState } from 'react';

function App() {
  const [storageData, setStorageData] = useLocalStorage('storageData', []);
  const [toEdit, setToEdit] = useState(false);
  const [editData, setEditData] = useState([]);
  const navigate = useNavigate();

  function handleEditing(id) {
    const logicrecord = storageData.filter(storeddata => storeddata.id === id);
    setEditData(() => [...logicrecord]);
    setToEdit(true);
    navigate('/formpage', { replace: true });
    return editData;
  }

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
          path="/formpage"
          element={
            <>
              <FormPage
                handleData={handleData}
                editData={editData}
                setToEdit={setToEdit}
              />
              <Navigation />
            </>
          }
        />
        <Route
          path="/likedfoodpage"
          element={
            <LikedFoodPage
              storageData={storageData}
              handleDelete={handleDelete}
              handleEditing={handleEditing}
            />
          }
        />
        <Route
          path="/dislikedfoodpage"
          element={
            <DisLikedFoodPage
              storageData={storageData}
              handleDelete={handleDelete}
              handleEditing={handleEditing}
            />
          }
        />
        <Route
          path="/profilepage"
          element={
            <>
              <ProfilePage />
              <Navigation />
            </>
          }
        />
        <Route path="/catinfopage" element={<CatInfoPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
