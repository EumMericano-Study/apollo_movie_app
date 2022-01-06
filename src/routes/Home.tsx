import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) {
        return "loading...";
    }
    if (data && data.movies) {
        return data.movies.map(
            (movie: { id: number; medium_cover_image: string }) => (
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} />
                </div>
            )
        );
    }
};
