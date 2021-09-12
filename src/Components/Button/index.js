import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../Theme';
import { CustomButton } from './Button.style';

const index = ({ type, content }) => {
	return (
		<ThemeProvider theme={theme}>
			<CustomButton type={type}>
				{content}

			</CustomButton>
		</ThemeProvider>
	);
};

export default index;
