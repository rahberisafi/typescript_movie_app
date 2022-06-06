import React, { FC, FormEvent, useState } from 'react'

import './index.css'

interface Props {
  addMovie(movie: string): void
}

const MovieForm: FC<Props> = ({ addMovie }) => {
  const [movie, setMovie] = useState<string>('')

  const handleMovie = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addMovie(movie)
    setMovie('')
  }
  return (
    <form className='movieForm' onSubmit={handleMovie}>
      <div className='form-group'>
        <input
          type='text'
          name='movie'
          placeholder='Add Movie..'
          autoComplete='off'
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <input type='submit' value='Add' />
      </div>
    </form>
  )
}

export default MovieForm
