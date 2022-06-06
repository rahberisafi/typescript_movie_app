import React, { FC } from 'react'
import { IMovie } from '../interfaces'

import './index.css'

interface Props {
  movie: IMovie
  key: number
  completeMovie(id: number): void
  deleteMovie: (id: number) => void
}

const MovieList: FC<Props> = ({ movie, key, completeMovie, deleteMovie }) => {
  const movieComplete = (): void => {
    if (!movie.completed) {
      completeMovie(movie.id)
    }
  }

  const movieDelete = (): void => {
    deleteMovie(movie.id)
  }

  return (
    <div key={key} className='movie'>
      <h1
        onClick={movieComplete}
        style={
          movie.completed ? { pointerEvents: 'none' } : { cursor: 'pointer' }
        }
      >
        {movie.completed ? (
          <span style={{ textDecorationLine: 'line-through' }}>
            {movie.movie}
          </span>
        ) : (
          movie.movie
        )}
      </h1>
      {movie.completed ? (
        <button type='button' onClick={movieDelete}>
          Delete
        </button>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MovieList
