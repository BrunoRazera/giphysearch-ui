import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { Box } from '@mui/system'
import { axiosInstance } from '../../api/requestApi'

export function GiphySearch ({ headerText }) {
  const [searchText, setSearchText] = useState('')
  const [giphyList, setGiphyList] = useState([])

  useEffect(async () => {
    const response = await axiosInstance.get('/search?api_key=YMio5owuHSHOMK20e17rbiwhW8aLiVgT&q=cheeseburgers')
    setGiphyList(response?.data?.data)
  }, [searchText])

  return (
    <Box>
      <h1>{headerText}</h1>
      <input type={'search'} value={searchText} onChange={({ target }) => setSearchText(target.value) } />
      {giphyList.map(item => {
        return (
          <div key={item.id}>
            <img src={item.images.preview_gif.url} />
          </div>
        )
      })}
    </Box>
  )
}

GiphySearch.propTypes = {
  headerText: propTypes.string
}
