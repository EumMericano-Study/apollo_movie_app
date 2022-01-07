import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import {
    OuterContainer,
    Container,
    Column,
    Title,
    Subtitle,
    Description,
    Poster,
} from "./Detail.style";

import { Movies } from "./Home.style";
import Movie from "../components/Movie";

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
        suggestions(id: $id) {
            id
            medium_cover_image
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
        <OuterContainer>
            <Container>
                {loading && <Loading>Loading...</Loading>}
                {error && <Loading>Error</Loading>}
                {!loading && data?.movie && (
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
            <Movies>
                {data?.suggestions?.map((movie: Movie) => {
                    const { id, medium_cover_image } = movie;
                    return <Movie key={id} id={id} _src={medium_cover_image} />;
                })}
            </Movies>
        </OuterContainer>
    );
}
