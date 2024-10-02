import Link from 'next/link';

export default function AnimeCard({ anime }: any) /* eslint-disable @typescript-eslint/no-explicit-any */ {

    return (
        <article className="anime-card">
            <div>
                    <div className="anime-card-content">
                        <Link href={`/anime/${anime.mal_id}`}>
                            <img
                                src={anime.images.webp.image_url}
                                alt={anime.title_english}
                                className="anime-image"
                            />
                        </Link>
                    </div>
                
            </div>
        </article>
    )
}