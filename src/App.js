import React from 'react'
import './App.css'
import { GiphySearch } from './components/GiphySeach'
import { Box, ThemeProvider } from '@mui/system'

export default function App () {
  return (
    <ThemeProvider theme={{
      palette: {
        primary: {
          main: '#007FFF',
          dark: '#0059B2'
        }
      }
    }}>
      <div className="App">
        <Box sx={{ display: 'grid' }}>
          <GiphySearch headerText='test'></GiphySearch>
        </Box>
      </div>
    </ThemeProvider>
  )
}
