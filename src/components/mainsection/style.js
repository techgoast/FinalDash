import Styled from "styled-components";

export const Mainsection = Styled.main`
display: flex;
justify-content: space-between;
align-items: flex-start;
min-height: cacl(100vh - 100px);
@media(max-width: 767px) {
    flex-direction: column;
}
`