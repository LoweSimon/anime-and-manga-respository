import { gql } from '@apollo/client';

export const GET_ANIME = gql`
    query media($id:Int,$page:Int) {
        Page(page: $page) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media(id: $id) {
            id
            title {
                english
                native
                romaji
            }
            coverImage {
                large
            }
            }
        }
    }

`