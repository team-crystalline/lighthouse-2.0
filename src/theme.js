import { createTheme } from '@mui/material/styles';
const customColours = {
  highlight: '#D9B23D', // Highlight color 1
  highlight2: '#D93425', // Highlight color 2
  links: '#123859', // Links, Names of Inner World entries, etc
  buttons: '#9CD9D3', // Buttons
  headers: '#911111', // Headers, Highlight color 3
  headerBar: '#52565c', // Header bar
  dropDowns: '#def1f0', // Dropdowns, Pop-up windows
  darkColour: '#065966', // Largely Unused -- Usually a dark color
  polar: 'ghostwhite', // Alter Cards: Background Color
  archivedtxt: 'grey', // Archived Alter Cards: Text Color
  archivedbg: 'silver', // Archived Alter Cards: Background Color
  input: 'rgba(160, 193, 236, .2)', // Tint for input boxes
  forumShade: 'rgba(0,0,0,.05)', // Tint for alternating rows on the forum, used occasionally elsewhere
  bgImg: 'url("../img/anchor-bg.png")', // Background image of the site. You can use direct links to images here!
  wrapper: 'rgba(255,255,255,.4)', // Tint for the main content of the page
  text: 'rgb(24, 24, 24)', // Main text color
  lighthouse: 'rgb(99, 232, 241)', // Header Text for site name
  page: 'gainsboro', // Sometimes used for background colors of the site, but not always
}
const theme = createTheme({
  typography: {
    fontFamily: 'Lexend, sans-serif',
    allVariants: {
      color: customColours.text,
    },
  },
  palette: {
    primary: {
      main: '#9CD9D3',
    },
    secondary: {
      main: '#3273dc',
    },
    success: {
      main: '#48c774',
    },
    warning: {
      main: '#ffdd57',
    },
    error: {
      main: '#D93425',
    },
    header: {
      typography: {
        fontFamily: 'Berkshire Swash, cursive',
        color: '#9aedf3',
      },
      main: '#52565c',
    },
    subheader: {
      typography: {
        fontFamily: 'Merriweather, serif',
        color: customColours.headers,
        fontWeight: 'bold',
        fontSize: 'x-large' // Use 'x-large' to further increase the font size
      },
      main: '#52565c',
    }
  },
  alignments:{
    left:{
      textAlign: 'left'
    },
    right: {
      textAlign: 'right'
    }, 
    center: {
      textAlign: 'center'
    },
    justify:{
      textAlign: 'justify'
    }
  },
  layout:{
    margin: {
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
      xxl: '40px',
      none: '0',
    },
    padding: {
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
      xxl: '40px',
      none:'0',
    },
    lineHeight: {
      xs: '1.2',
      s: '1.4',
      m: '1.6',
      l: '1.8',
      xl: '2.0',
      xxl: '2.2',
      none: '0',
    }
  },
  otherComponents:{
    legalDisclaimers:{
      fontSize: 'smaller',
      fontWeight: '300',
      fontStyle: 'italic'
    }
  }
});

export default theme;
export { customColours };