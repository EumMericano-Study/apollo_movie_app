import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Poster = styled.img`
    width: 25%;
    height: 60%;

    object-fit: cover;
`;

export { Container, Column, Title, Subtitle, Description, Poster };
