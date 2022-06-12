import Styled from "styled-components";
import { Flex } from "../temp";


export const Evsec = Styled.section`
width: 80%;
padding: 15px;
@media(max-width: 767px) {
    width: 100%;
}
`
export const Stsapn = Styled.span`
color: ${props => props.active && "#744900"};
font-size: ${props => props.size};
font-weight: ${props => props.weight};
padding: 10px;
cursor: pointer;
&:hover {
    border-bottom: ${props => props.left && "2px solid #744900"};
};
`
export const Stflex0 = Styled(Flex)`
@media(max-width: 767px) {
    flex-direction: column;
}
`
export const Stflex = Styled(Flex)`
flex-wrap: wrap;
align-items: flex-start;
justify-content: initial;
gap: 20px;
@media(max-width: 767px) {
    justify-content: center;
}
`
export const Ev = Styled.div`
width: calc((100% - 90px)  / 4);
padding: 15px 0;
@media(max-width: 1199px) {
    width: calc((100% - 70px) / 3);
}
@media(max-width: 991px) {
    width: calc((100% - 50px) / 2);
}
@media(max-width: 767px) {
    width: 80%;
    margin-top: 20px;
    padding: 20px;
}
`
export const Imgcontainer = Styled.div`
width: fit-content;
height: 200px;
margin: auto;
overflow: hidden;
position: relative;
@media(max-width: 767px) {
    text-align: center;
}
`
export const Before = Styled.span`
content: ${props => props.before};
color: white;
font-size: 16px;
background-color: orange;
position: absolute;
top: 10px;
left: 10px;
`
export const Stimg = Styled.img`
width: 250px;
max-width: 100%;
`
export const Photosrc = Styled.p`
height: 70px;
font-size: 11px;
word-wrap: break-word;
text-transform: lowercase;
`
export const Sth3 = Styled.h3`
font-size: 18px;
font-weight: 700;
`
export const Fl = Styled.div`
display: flex;
margin: 10px 0;
`
export const Special = Styled(Flex)`
position: relative;
&::after {
    content: "";
    width: ${props => props.bwidth};
    height: 2px;
    background-color: orange;
    position: absolute;
    bottom: 0;
}
`
export const Stp = Styled.p`
font-size: ${props => props.size};
font-weight: ${props => props.weight};
`