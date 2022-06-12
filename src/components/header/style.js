import Styled from "styled-components";
import { Flex } from "../temp";

export const Stheader = Styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
font-size: 13px;
font-weight: 400;
position: sticky;
top: 0;
background-color: white;
z-index: 1000;
@media(max-width: 767px) {
    padding: 15px 0;
}
`
export const Side = Styled(Flex)`
@media(max-width: 991px) {
    flex-direction: column;
}
`
export const Headerlogo = Styled.div`
width: 120px;
over-flow: hidden;
`
export const Logo = Styled.img`
max-width: 100%;
`
export const Sti = Styled.i`
margin: 0 15px;
`
export const Logreg = Styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 10px;
margin: 0 15px;
border-radius: 5px;
font-size: 13px;
font-weight: 400;
`
export const Eventcreate = Styled(Logreg)`
color: white;
background-image: linear-gradient(to right , orangered ,  orange);
`