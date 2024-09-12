import { GET_ANIME } from "@/app/graphql/queries/getAllAnime";
import { client } from "@/app/services/apolloClient";

export async function GetAnimeInfo(id: number) {
    const { data } = await client.query({
        query: GET_ANIME,
        variables: {
            id,
        },
    });

    return data.Page;
}