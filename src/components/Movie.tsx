import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;

export default ({
    id,
    _src,
    isLiked,
}: {
    id: number;
    _src: string;
    isLiked?: number;
}) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, {
        variables: { id, isLiked },
    });
    return (
        <div>
            <Link to={`/${id}`}>
                <img src={_src} width="100%" height="100%" />
            </Link>
            <button onClick={() => toggleMovie()}>
                {isLiked ? "unlike" : "like"}
            </button>
        </div>
    );
};
