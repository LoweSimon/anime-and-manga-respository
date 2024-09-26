import Link from "next/link"

export default function Sidebar({
    topAnime
}) {
    return (
        <>
            <aside>
                <h3>Top Anime</h3>

                <div className="side-top-anime">
                    {topAnime.data.slice(0, 5).map(top => (
                        <Link href={`/anime-zone/${top.mal_id}`} key={top.mal_id}>
                            <p>{top.title_english}</p>
                        </Link>
                    ))}
                </div>
                        
                <hr />

                {/* <h3>Top Manga</h3>

                <div className="side-top-anime">
                    {topManga.data.slice(0, 5).map(t => (
                        <Link href={`/anime/${t.mal_id}`} key={t.mal_id}>
                            <p>{t.title_english}</p>
                        </Link>
                    ))}
                </div> */}
            </aside>
        </>
    )
}