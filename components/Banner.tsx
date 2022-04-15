import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Movie } from '../types'
import { baseUrl } from './constants/movie'

interface Props {
  netflixOriginals: Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  console.log(movie)

  return (
    <div>
      <div className=" absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `}
          layout="fill"
          alt={movie?.name}
          objectFit="cover"
        />
      </div>
    </div>
  )
}
