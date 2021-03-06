import { InformationCircleIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../types'
import { FaPlay } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import Image from 'next/image'

interface Props {
  netflixOriginals: Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  // randomly selecting a differnet movie on page load
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  // shortening movie description on the banner
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str
  }

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.name || movie?.title || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {/* Non-null assertion operator ! */}
        {truncate(movie?.overview!, 150)}
      </p>
      <div className="flex space-x-3">
        {/* play button on banner */}
        <button className="banner-btn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        {/* more info button on banner */}
        <button
          className="banner-btn bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}
