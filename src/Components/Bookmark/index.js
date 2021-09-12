import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../Theme.js'
import { Bookmark } from './Bookmark.style.js'

const index = () => {
    return (
        <ThemeProvider theme={theme}>
            <Bookmark>
            <svg width="57" height="57" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>

            <span>Bookmark</span>
            </Bookmark>
        </ThemeProvider>
    )
}

export default index
