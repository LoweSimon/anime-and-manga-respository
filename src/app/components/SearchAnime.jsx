export default function SearchAnime(props) {
    return (
        <>
            <div className="">
                <input type="search" onChange={e => props.setSearchResult(e.target.value)} /><span>Search</span>
            </div>
        </>
    )
}