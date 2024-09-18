import Link from "next/link"

async function getAnimes() {
    const res = await fetch(`https://api.jikan.moe/v4/anime?page=1`)

    return res.json()
}

export default async function AnimeList() {

    const animes = await getAnimes()

    for(const [key, value] of Object.entries(animes.pagination)) {
        console.log(`${key}: ${value}`)
    }
    for(const [key, value] of Object.entries(animes.pagination.items)) {
        console.log(`${key}: ${value}`)
    }


    return (
        <>
            <h2>Pages</h2>
            <p>{animes.pagination.current_page}</p>
            
            
            
            {animes.data.map((anime) => (
                <div key={anime.mal_id}>
                    <Link href={`/all-anime/${anime.mal_id}`}>
                        <img src={anime.images.webp.image_url} alt="" />
                    </Link>
                </div>
            ))}
        </>
    )
}