"use client"

import AnimeCard from './../components/AnimeCard';
import { useState, useEffect } from 'react';
import SearchAnime from '../components/SearchAnime';

export default function Anime() {

    const [searchResult, setSearchResult] = useState('naruto')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const searchAnimes = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchResult}`)
                const data = await response.json()
                setSearchResult(data)
            } finally {
                setLoading(false)
            }
        }
        searchAnimes()
      }, [searchResult])


      if (isLoading) return <p>Loading Anime...</p>
      
    return (
        <>
            <h2>Search for your favourite Anime</h2>

            <SearchAnime 
                searchResult={searchResult}
            />

            {/* <AnimeCard 
                // anime={anime}
                // key={anime.mal_id}
            /> */}
        </>
    )
}