import { FC, CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import {
  flexbox,
  fontSize,
  buttonStyle,
  space,
  layout,
  typography,
  color,
  background,
  display,
  border,
  size,
  boxShadow,
} from 'styled-system';
import type {
  FlexboxProps,
  FontSizeProps,
  ButtonStyleProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  BackgroundProps,
  DisplayProps,
  BorderProps,
  SizeProps,
  BoxShadowProps,
} from 'styled-system';

export type BoxProps = {
  id?: string;
  children?: ReactNode;
  css?: string;
  src?: string;
  as?: string;
  style?: CSSProperties;
  type?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  onClick?: (e: Event) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & FlexboxProps &
  SpaceProps &
  SizeProps &
  FontSizeProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BackgroundProps &
  DisplayProps &
  BorderProps &
  ButtonStyleProps &
  BoxShadowProps;

export type BoxType<T = {}> = FC<BoxProps & T>;

const Box: BoxType = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${layout}
  ${display}
  ${typography}
  ${fontSize}
  ${size}
  ${color}
  ${background}
  ${border}
  ${flexbox}
  ${buttonStyle}
  ${boxShadow}
`;

export default Box;
