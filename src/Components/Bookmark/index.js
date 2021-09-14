import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme.js';
import { Bookmark } from './Bookmark.style';

// TODO -- Add active states.

const Bookmarked = () => {
	const [ active, setActive ] = useState(false);

	useEffect(() => {
		setActive(active);
		console.log(`After clicked:  ${active}`)
	}, [active])

	return (
		<ThemeProvider theme={theme}>
			<Bookmark onClick={() => setActive(!active)} active={active}>
				<svg width="57" height="57" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
						<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
					</g>
				</svg>

				<span>Bookmark</span>
			</Bookmark>
		</ThemeProvider>
	);
};

export default Bookmarked;
