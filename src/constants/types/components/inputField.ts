import {ReactNode} from 'react';
import {ITheme} from '../theme';

export type IInputField = {
  title?: string;
  theme: ITheme;
  placeholder: string;
  endadornment?: {
    right?: {
      element: ReactNode;
      isButton?: boolean;
    };
    left?: {
      element: ReactNode;
      isButton?: boolean;
    };
  };
};
