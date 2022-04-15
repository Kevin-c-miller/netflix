import React from 'react'
import { Movie } from '../types'

interface Props {
  title: string
  movies: Movie[]
}

export default function Row({ title, movies }: Props) {
  return <div>Row</div>
}
