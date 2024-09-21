import AnimeList from "./AnimeList";
import SearchAnime from './../components/SearchAnime';


export default function ShowAnime() {


    return (
        <div className="container mx-auto">   
            <SearchAnime />
            <h1 className="font-bold text-4xl underline uppercase text-center m-4">All Anime</h1>
            <p></p>
            <div className="flex flex-row flex-wrap justify-between gap-10 container mx-auto">
                
                {/* @ts-expect-error Server Component */}
                <AnimeList />
            </div>
        </div>
    )
}