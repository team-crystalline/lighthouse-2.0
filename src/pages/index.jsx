import { Typography, Button } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import PropTypes from 'prop-types';
import theme, { customColours } from '../theme';

import lighthouseImg from '../img/lighthouse-banner.svg';

export default function IndexPage({ t }) {

    return (
        <>
            <div style={{ 
                position: 'relative', 
                left: '50%', 
                right: '50%', 
                top: '-48px',
                marginLeft: '-50vw', 
                marginRight: '-50vw', 
                width: '100vw', 
                overflow: 'hidden', 
                height: '33vh', 
                backgroundImage: `url(${lighthouseImg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                marginBottom: '16px'
            }}>
            </div>
            {/* Sign Up + Header */}
            <div style={{
                display: 'flex',
                alignItems: 'bottom'
            }}>
            <Typography variant="h4" component="p" sx={{
                fontFamily: "Merriweather, serif",
                fontWeight: 'bold',
                color: customColours.headers
            }}>
            {t('indexPage.slogan')}
            </Typography>
            <Button 
                variant="contained" 
                size="large"
                sx={{
                border: `1px solid ${customColours.darkColour}`,
                backgroundColor: customColours.buttons,
                color: customColours.text,
                margin: '20px'
                }}
            >
            {t('indexPage.signUp')}
            </Button>
            </div>
            {/* IndexPage Content */}
            <hr/>
            <Typography component="p" sx={{
            fontFamily: "Lexend, sans-serif",
            color: customColours.text
            }}>
            {t('indexPage.desc.1')} {t('indexPage.desc.2')} {/* They're separate in case we make this into a link again. */}
            </Typography>
            <Typography component="p" sx={{ ...theme.otherComponents.legalDisclaimers }}>
                <AnchorIcon /> 
                {t('indexPage.desc.3')}
            </Typography>
            {/* Un-comment when journals and their icons are added. */}
            {/* <Typography component="p">
                <a href="#">{t('indexPage.desc.4')}</a>
            </Typography> */}
            <Typography component="p">
                <a href="/about">{t('indexPage.desc.5')}</a>
            </Typography>
            <hr/>
            {/* Features */}
            <div style={{...theme.alignments.left, marginBottom: theme.layout.margin.m}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.1.title')}
                </Typography>
                <Typography component="p">
                    {t('indexPage.features.1.desc')}
                </Typography>
            </div>

            <div style={{...theme.alignments.right, marginBottom: theme.layout.margin.m}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.2.title')}
                </Typography>
                <Typography component="p">
                    {t('indexPage.features.2.desc')}
                </Typography>
            </div>

            <div style={{...theme.alignments.left, marginBottom: theme.layout.margin.m}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.3.title')}
                </Typography>
                <Typography component="p">
                    {t('indexPage.features.3.desc')}
                </Typography>
            </div>

            <div style={{...theme.alignments.right, marginBottom: theme.layout.margin.m}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.4.title')}
                </Typography>
                <Typography component="p">
                    {t('indexPage.features.4.desc')}
                </Typography>
            </div>

            <div style={{...theme.alignments.left, marginBottom: theme.layout.margin.m}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.5.title')}
                </Typography>
                <Typography component="p">
                    {t('indexPage.features.5.desc')}
                </Typography>
            </div>

            <div style={{...theme.alignments.right, marginBottom: theme.layout.margin.xs}}>
                <Typography component="h2" sx={{...theme.palette.subheader.typography}} >
                    {t('indexPage.features.6.title')}
                </Typography>
                <Typography component="p" sx={{ marginBottom: theme.layout.margin.xs }}>
                    {t('indexPage.features.6.desc')}
                </Typography>
                <Typography component="p" sx={{ ...theme.otherComponents.legalDisclaimers }}>
                    {t('indexPage.lastFeatureDisclaimer')}
                </Typography>
            </div>
        </>
    );
}

IndexPage.propTypes = {
    t: PropTypes.func.isRequired,
};