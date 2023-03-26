import '@emotion/react';
import { Theme } from '@emotion/react';
import { VariablesType } from './variables';

declare module '@emotion/react' {
	export interface DefalutTheme {
		colors: Theme;
		variables: VariablesType;
	}
}

declare module '@emotion/react' {
	interface Theme {
		[x: string];
	}
}
