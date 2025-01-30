interface AppTheme {
    guestBackground: string;
    userBackground: string;
    mainActiveColor: string;
    headerBackground: string;
    listBackground: string;
    listItemBackground: string;
    text: {
        mainBlackColor: string;
        menuItemColor: string;
        activeMenuItemColor: string;
    }
    
};

const theme: AppTheme = {
    guestBackground: 'linear-gradient(60deg, #ffffff 0%,  #ffffff 20%, #D0B5EE 50%, #8E50D2 100%)',
    userBackground: 'linear-gradient(60deg, #ffffff 0%, #D0B5EE 23%, #8E50D2 100%)',
    mainActiveColor: ' #8E50D2',
    headerBackground:' #ffffff',
    listBackground: ' #E3D3F4',
    listItemBackground: ' #ffffff',
    text: {
        mainBlackColor: ' #4A4A4A',
        menuItemColor: ' #C8A4E4',
        activeMenuItemColor: ' #8E50D2',
    }
}

export default theme;