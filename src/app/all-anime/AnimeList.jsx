import Link from "next/link"

async function getAnimes() {
    const res = await fetch('https://api.jikan.moe/v4/anime/')

    return res.json()
}

export default async function AnimeList() {

    const animes = await getAnimes()

    return (
        <>
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