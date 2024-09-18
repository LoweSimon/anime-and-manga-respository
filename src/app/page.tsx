// import { Swiper, SwiperSlide } from 'swiper/react'

async function recommendedAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/recommendations/anime')

  return res.json()
}

export default async function Home() {

  const recommended = await recommendedAnimes()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Recommendations</h2>
        <div className="flex flex-row flex-wrap justify-between mb-4">
          {/* <Swiper
            spaceBetween={50}
            slidesPerView={5}
          >
            {recommended.data.map((r) => (
              <div key={r.mal_id}>
                {r.entry.map((e) => (
                  <SwiperSlide>
                    <img src={e.images.webp.image_url} alt="" />
                  </SwiperSlide>
                ))}
              </div>
            ))}
          </Swiper> */}

            {recommended.data.map((r) => (  
              <div key={r.mal_id}>
                {r.entry.map((e) => (
                    <img src={e.images.webp.image_url} alt="" />
                ))}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
