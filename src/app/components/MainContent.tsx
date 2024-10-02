// import AnimeCard from './AnimeCard';

export default function MainContent(props: any) {

    return (
        <>
            <div>
                <form 
                    className="search-box"
                    onSubmit={props.handleSearch}
                >
                    <input 
                        type="search" 
                        name="search" 
                        id="search"
                        placeholder="Search for your anime..."
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>

            <div>
                {/* {props.allAnime.data.map(anime => (
                    <AnimeCard 
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))} */}
            </div>
        </>
    )
}