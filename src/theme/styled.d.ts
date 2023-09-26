import 'styled-components';

import Theme from 'styles/theme';

export type ITheme = typeof Theme; 

declare module 'styled-components' {
    export type DefaultTheme = ITheme; 
}
