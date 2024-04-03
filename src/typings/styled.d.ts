import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: string;
    sidebarWidth: string;
    headerHeight: string;
    footerHeight: string;
    layoutPadding: string;
    textColor: string;
    textHoverColor: string;
    // Sidebar
    navTextColor: string;
    navTextActiveColor: string;
    navTextHoverColor: string;
    navBgHoverColor: string;
    navBgActiveColor: string;
    navBgActiveHoverColor: string;
  }
}
