"use client"

import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


export default function Home() {

  const [topAnime, setTopAnime] = useState([])
  const [allAnime, setAllAnime] = useState([])
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true)


    const getTopAnime = async () => {
      try {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime')
        const data = await temp.json()
        setTopAnime(data);
        } finally {
          setLoading(false) 
        }
      }

    const handleSearch = (e: { preventDefault: (arg0: Promise<void>) => void; }) => {
      e.preventDefault(

        getAllAnime()
      )
    }

  
    const getAllAnime = async () => {
        const tempData = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        const allData = await tempData.json()
        setAllAnime(allData)
    }

    useEffect(() => {
      getTopAnime()
    }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      
      <Header />

      <main className="anime-zone">
        <Sidebar 
          topAnime={topAnime}
        />

        <MainContent 
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          allAnime={allAnime}
        />
        
      </main>
    </div>
  );
}
