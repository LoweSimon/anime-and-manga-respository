import AnimeList from "./AnimeList";


export default function ShowAnime() {


    return (
        <div>   
            <h1>All Anime</h1>
            <p></p>
            <div className="flex flex-row flex-wrap justify-between gap-10 container mx-auto">
                
                {/* @ts-expect-error Server Component */}
                <AnimeList />
            </div>
        </div>
    )
}