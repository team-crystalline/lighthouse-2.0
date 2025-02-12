import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import theme, { customColours } from './theme';
import './i18n'; // Initialize i18next

// Pages
import IndexPage from './pages/index';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    document.title = t('siteName');
  }, [t]);

  return (
    <div theme={theme} style={{ padding: '3em' }}>
      <Routes>
        <Route exact path="/" element={<IndexPage t={t} />} />
        {/* Error Route */}
        <Route path="*" element={<Typography variant="h2">Not Found</Typography>} />
      </Routes>
    </div>
  );
}

export default App;