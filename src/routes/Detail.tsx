import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import {
    Container,
    Column,
    Title,
    Subtitle,
    Description,
    Poster,
} from "./Detail.style";
import { Loading } from "./Home.style";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            rating
            medium_cover_image
            description_intro
            language
        }
    }
`;

export default function Detail() {
    const { id } = useParams();
    const parsedId = Number(id || "");

    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: { id: parsedId },
    });

    return (
        <Container>
            {loading && <Loading>Loading...</Loading>}
            {error && <Loading>Error</Loading>}
            {!loading && data.movie && (
                <>
                    <Column>
                        <Title>{data.movie.title}</Title>
                        <Subtitle>
                            💬{data.movie.language} ⭐{data.movie.rating}
                        </Subtitle>
                        <Description>
                            {data.movie.description_intro}
                        </Description>
                    </Column>
                    <Poster src={data.movie.medium_cover_image} />
                </>
            )}
        </Container>
    );
}
