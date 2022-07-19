import styled  from "styled-components";

export const Container = styled.div`
height: 90px;
background: ${props => props.theme.colors.primary};
color: #ec1d24;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;
`;

