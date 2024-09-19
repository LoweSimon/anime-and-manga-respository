import NextPage from './../components/PaginationButtons';

export default async function AnimeList() {
    let current_page = 1
    let data = await fetch(`https://api.jikan.moe/v4/anime?page=${current_page}`)
    let anime = await data.json()

    const total_pages = anime.pagination.last_visible_page
    const page = anime.pagination.current_page



    return (
        <div>
             
            <div className="flex flex-col flex-wrap">
                <ul>
                    {anime.data.map(a => (
                        <li>{a.title}</li>
                    ))}
                </ul>
            </div>
            
            <NextPage
                current_page={current_page}
                total_pages={total_pages}
                page={page}
            />  
        </div>
    )
}