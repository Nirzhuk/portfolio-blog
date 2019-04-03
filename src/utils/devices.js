const size = {
    mobileMin: '320px',
    mobileMax: '640px',
    tabletMin: '768px',
    tabletMax: '1023',
    laptopMin: '1024px',
    laptopMax: '1440px',
    desktopMin: '1920px',
}
export default {
    mobile: `only screen and (min-width: ${size.mobileMin}) and (max-width: ${size.mobileMax})`,
    tablet: `only screen and (min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
    laptop: `only screen and (min-width: ${size.laptopMin}) and (max-width: ${size.laptopMax})`,
    desktop: `only screen and (min-width: ${size.desktopMin})`,
};