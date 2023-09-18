// https://styled-components.com/docs/api#typescript

// import original module declarations
import type theme from '../../tokens/theme.json';

import 'styled-components';

// and extend them!
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
