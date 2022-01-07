import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Movie from "../components/Movie";

import {
    Container,
    Loading,
    Header,
    Title,
    Subtitle,
    Movies,
} from "./Home.style";

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
    return (
        <Container>
            <Header>
                <Title>Movie App with React and Apollo</Title>
                <Subtitle>and GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            {error && <div>Error...</div>}
            {!loading && data && data.movies && (
                <Movies>
                    {data.movies.map(
                        (movie: { id: number; medium_cover_image: string }) => {
                            const { id, medium_cover_image } = movie;
                            return (
                                <Movie
                                    key={id}
                                    id={id}
                                    _src={medium_cover_image}
                                />
                            );
                        }
                    )}
                </Movies>
            )}
        </Container>
    );
};
