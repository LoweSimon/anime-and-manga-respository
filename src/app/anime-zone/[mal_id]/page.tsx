async function getAnime(mal_id: number) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)

    return res.json()
}

export default async function AnimeDetails({ params }: any) /* eslint-disable @typescript-eslint/no-explicit-any */ {

    const anime = await getAnime(params.mal_id)
    

    return (
        <div className="container mx-auto">
            <table>
                <thead>
                    <td>Title</td>
                </thead>
                <tbody>
                    <tr>
                        {anime.data.title}
                    </tr>
                </tbody>
            </table>
            <p>{anime.data.synopsis}</p>
            <iframe src={anime.data.trailer.embed_url}></iframe>
        </div>
    )
}