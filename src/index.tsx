import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import { variables } from './styles/variables';
import { global } from './styles/globalStyle';
import { colors } from './styles/colors';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<Global styles={global} />
		<ThemeProvider theme={{ colors, variables }}>
			<Home />
		</ThemeProvider>
	</>
);
