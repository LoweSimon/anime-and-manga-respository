import { Link } from 'next/link';
import { Image } from 'next/image'

export default function AnimeCard({anime}) {

    return (
        <article className="anime-card">
            <div>
                <Link href={"/"}>
                    <Image 
                        src={"/"}
                    />
                </Link>
            </div>
        </article>
    )
}