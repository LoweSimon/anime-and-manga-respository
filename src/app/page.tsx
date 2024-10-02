import Header from './components/Header';
import Link from 'next/link';

import animeBackground from './assets/images/anime-background.jpg';
import mangaBackground from './assets/images/manga-background.jpg';


export default function Home() {
  return (
    <>

    <Header />

      <div className="zone-select container">
        <div className="zone-container">
          <p>The <span className='highlight-text'>Anime</span> Zone</p>
          <Link href={'/anime-zone'}>
            <div className="anime-zone zones">
              <img src={animeBackground.src} alt="" />
              <span>Enter</span>
            </div>
          </Link>
        </div>

        <div className="zone-container">
          <p>The <span className='highlight-text'>Manga</span> Zone</p>
          <Link href={'/manga-zone'}>
            <div className="manga-zone zones">
              <img src={mangaBackground.src} alt="" />
              <span>Enter</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}