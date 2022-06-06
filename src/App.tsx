import React, { FC, useState } from 'react'
import { IMovie } from './components/interfaces'

import MovieForm from './components/MovieForm'

import './App.css'
import MovieList from './components/MovieList'

const App: FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([
    {
      id: 1,
      movie: 'the godfather',
      completed: true,
    },
    {
      id: 2,
      movie: 'the departed',
      completed: false,
    },
  ])

  const addMovie = (movie: string): void => {
    if (!movie) {
      alert('please add movie!')
      return
    }
    const data: IMovie = {
      id: movieList.length < 1 ? 1 : movieList[movieList.length - 1].id + 1,
      movie: movie,
      completed: false,
    }
    setMovieList([...movieList, data])
    alert('Movie added successfully!')
  }

  const completeMovie = (id: number): void => {
    setMovieList(
      movieList.map(
        (movie: IMovie): IMovie =>
          movie.id === id
            ? Object.assign(movie, { completed: true }) && movie
            : movie
      )
    )
    alert('Nice job!')
  }

  const deleteMovie = (id: number): void => {
    setMovieList(
      movieList.filter((movie: IMovie): IMovie | null =>
        movie.id !== id ? movie : null
      )
    )
    alert('Movie deleted successfully!')
  }

  return (
    <div className='app'>
      <h1 className='heading'>React Typescript Movie Add App</h1>
      <div className='container'>
        <MovieForm addMovie={addMovie} />
        <div className='movieList'>
          {movieList.map((movie: IMovie, key: number) => (
            <MovieList
              key={key}
              movie={movie}
              completeMovie={completeMovie}
              deleteMovie={deleteMovie}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
