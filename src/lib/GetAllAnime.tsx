export const getStaticProps = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime/')
    const data = await res.json()

    return {
        props: {
            animes: data
        }
    }
}