"use client"

export default function NextPage({
  current_page,
  total_pages,
  set_current_page,
}) {    

    return (
        <>
            <div className="join my-4 border border-gray-700 bg-gray-700">
                <button
                  className="join-item btn"
                  onClick={() => set_current_page((current_page - 1) || 1)}
                >
                  Previous Page
                </button>

                <p className="flex flex-row gap-2 my-auto mx-6 text-white">{current_page} <span>of</span> {total_pages}</p>

                <button
                  className="join-item btn"
                  onClick={() => set_current_page(current_page++)}
                >
                  Next Page <i class="fa-solid fa-chevron-right text-white"></i>
                </button>
            </div>
        </>
    )
}