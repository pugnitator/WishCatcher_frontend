interface AppTheme {
    guestBackground: string;
    userBackground: string;
    colorPurple: string;
    colorPurpleLigth: string;
    colorLight: string;
    colorLightAlt: string;
    colorDark: string;
    colorYellow: string; 
};

const theme: AppTheme = {
    guestBackground: 'linear-gradient(60deg, #ffffff 0%,  #ffffff 20%, #D0B5EE 50%, #8E50D2 100%)',
    userBackground: 'linear-gradient(60deg, #ffffff 0%, #D0B5EE 23%, #8E50D2 100%)',
    colorPurple: ' #8E50D2',
    colorPurpleLigth: ' #C8A4E4',
    colorLight:' #ffffff',
    colorLightAlt: ' #E3D3F4',
    colorDark: ' #4A4A4A',
    colorYellow: ' #FFD484',
}

export default theme;