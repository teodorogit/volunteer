import styled from "styled-components";

export const CardComponent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
font-size:20px;
font-family:'Helvetica';
  padding:10px;
  border-bottom:1px dashed #007566;;
  color:#8FC1B5;
  width:8vw;
  height:7vw;
  cursor:pointer;
@media (max-width:770px){
  width:70%;
  margin-right:5px;
  height:40px;
  border-radius:100px;
  transform:translateX(-50%);
}
`;
export const Titulo = styled.h3`


@media (max-width:770px){
display:none;


}
`;