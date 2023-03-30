import '@emotion/react';
import { Theme } from '@emotion/react';
import React from 'react';
import { VariablesType } from './variables';

declare module '@emotion/react' {
	interface DefalutTheme {
		colors: Theme;
		variables: VariablesType;
	}
}

declare module '@emotion/react' {
	interface Theme {
		[x: string];
	}
}

declare module React {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		size: string;
	}
}
