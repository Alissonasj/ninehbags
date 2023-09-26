import { DefaultTheme } from "@theme/defaultTheme";
import "styled-components";

export type ITheme = typeof DefaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
