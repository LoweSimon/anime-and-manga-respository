// import { Swiper, SwiperSlide } from 'swiper/react'
import Header from './components/Header';
import Link from 'next/link'

async function recommendedAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime')

  return res.json()
}

export default async function Home() {

  const recommended = await recommendedAnimes()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        <h2 className="text-xl underline">Top Animes</h2>
        <div className="top-anime">

            {recommended.data.map(r => (  
              <div key={r.mal_id} className="top-anime-card">
                <Link href={`/all-anime/${r.mal_id}`}>
                  <img src={r.images.webp.image_url} alt={r.title_english} width={200} height={500} />
                  <h3>{r.title_english}</h3>
                </Link>
              </div>
            ))}

        </div>
      </main>
    </div>
  );
}
