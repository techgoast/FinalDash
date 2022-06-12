import Styled from "styled-components";

export const Container = Styled.div`
width: 20%;
min-height: calc(100vh - 50px);
padding: 15px 15px 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: sticky;
top: 60px;
@media(max-width: 991px) {
    width: 30%;
    min-height: calc(100vh - 100px);
}
@media(max-width: 767px) {
    width: 95%;
    margin: auto;
    min-height: initial;
    position: relative;
    top: initial;
}
`
export const Sthead = Styled.h2`
font-size: 20px;
font-weight: 700;
@media(max-width: 991px) {
    font-size: 18px
}
`
export const Stform = Styled.form`
@media(max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
`
export const Inputdiv = Styled.div`
margin: 10px 0;
flex-grow: 1;
`
export const Inplabel = Styled.label`
display: block;
font-size: 16px;
font-weight: 600;
@media(max-width: 991px) {
    font-size: 14px
}
`
export const Selectinp = Styled.select`
width: 100%;
border: none;
outline: none;
font-size: 15px;
font-weight: 400;
@media(max-width: 991px) {
    font-size: 13px
}
`
export const Dateinp = Styled.input`
width: 100%;
border: none;
outline: none;
`