import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
            <Movies>
                {data &&
                    data.movies &&
                    data.movies.map(
                        (movie: { id: number; medium_cover_image: string }) => (
                            <div key={movie.id}>
                                <img src={movie.medium_cover_image} />
                            </div>
                        )
                    )}
            </Movies>
        </Container>
    );
};
