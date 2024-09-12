import { GetAnimeInfo } from "@/lib/GetAnimeInfo";

type AnimePageProps = {
    params: {
        id: string
    }
}

export default async function AllAnime({ params }: AnimePageProps) {
    const id = params
    
    const data = await GetAnimeInfo(Number(id))
    console.log(data)

    return (
        <div>
            <h1>All Anime</h1>
            <p>{data.pageInfo.perPage}</p>
                {/* <img src={data.coverImage.large} alt="" /> */}
                {/* <p>{data.Page.media[0].id}</p> */}
                {/* <p>{data.pageInfo.total}</p>
                <p>{data.media.title.english}</p> */}
                <p>{data.media.map((i) => {
                    <p>{i.title.english}</p>
                })}</p>
        </div>
    )
}