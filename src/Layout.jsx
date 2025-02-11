import React, {useState, useEffect} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { customColours } from './theme';

// import the Lighthouse logo from the public folder
import logo from './img/logo.png';

const Layout = ({ children }) => {
  const theme = useTheme();
    const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (event) => {
      const newLanguage = event.target.value;
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.header.main }}>

        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <img src={logo} alt="Lighthouse Logo" style={{ width: '50px', marginRight: '10px' }} />
              <Typography sx={{
                color: customColours.lighthouse,
                fontFamily: theme.palette.header.typography.fontFamily,
                fontSize: { xs: '2em', sm: '2.5em', md: '3em' }
              }}>
                {t('siteName')}
              </Typography>
          </div>
          
          {/* Language drop down */}
          <FormControl variant="outlined" style={{ margin: '1em' }}>
            <InputLabel id="language-select-label" sx={{ top: '6px' }}>{t('select_language')}</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              onChange={handleChange}
              label={t('select_language')}
              sx={{
                width: '30vw',
                backgroundColor: customColours.dropDowns,
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="jp">日本語</MenuItem>
              <MenuItem value="zh">中文</MenuItem>
              <MenuItem value="pl">Polski</MenuItem>
              <MenuItem value="uk">Українська мова</MenuItem>
              <MenuItem value="ru">Русский</MenuItem>
            </Select>
        </FormControl>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;