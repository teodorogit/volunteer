import styled from "styled-components";


export const Container = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
width:95vw;
margin:0 auto;
justify-content:space-between;

> div {
    display:flex;
}
@media (max-width:770px){
grid-template-columns:1fr;
width:90vw;
}

`;
export const Image = styled.img`
width:30vw;
`;
export const Cards = styled.div`
display:flex;
;`

export const SubContainer = styled.div`
display:flex;
width:100%;
padding:10px;
height:50px;
margin:0 auto;
`
export const MainContent= styled.div`
display:flex;
align-items:center;

`;