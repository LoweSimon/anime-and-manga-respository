"use client"

import NextPage from './../components/PaginationButtons';
import { useState, useEffect } from 'react';
// import { Link } from 'next/link';


export default function AnimeList() {
  const [current_page, set_current_page] = useState(1)
  const [anime, setAnime] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    const fetchAnimes = async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?page=${current_page}`)
            const data = await response.json()
            setAnime(data)
        } finally {
            setLoading(false)
        }
    }

    fetchAnimes()
  },[current_page])
  
  if (isLoading) return <p>Loading Anime...</p>

  const total_pages = anime.pagination.last_visible_page
  const page = anime.pagination.current_page

    return (
        <div>
            <NextPage
                current_page={current_page}
                total_pages={total_pages}
                page={page}
                set_current_page={set_current_page}
            />

            <hr className='border-red-700' />
             
            <div className="flex flex-row flex-wrap justify-between my-10">
                {anime.data.map(a => (
                    <a href={`/all-anime/${a.mal_id}`}>
                        <div className="image-container mb-4 hover:scale-105">
                                <img src={a.images.webp.image_url} alt="" />
                        </div>
                    </a>
                ))}
            </div>

            <hr className='border-red-700' />
            
            <NextPage
                current_page={current_page}
                total_pages={total_pages}
                page={page}
                set_current_page={set_current_page}
            />  
        </div>
    )
}