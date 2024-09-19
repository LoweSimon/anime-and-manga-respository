"use client"

export default function NextPage({ current_page, total_pages }) {
    
    return (
        <>
            <div className="join">
                <button className="join-item btn" onClick={() => current_page--}>Previous Page</button>
                <p>{current_page} <span>of</span> {total_pages}</p>
                <button className="join-item btn" onClick={() => current_page++}>Next Page</button>
            </div>
        </>
    )
}