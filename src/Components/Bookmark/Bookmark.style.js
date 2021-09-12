import styled from "styled-components";

export const Bookmark = styled.div`
  height: 55px;
  width: fit-content;
  border-radius: 56px;
  background: ${(prop) =>
    prop.active ? "rgba(242,242,242, .7)" : "rgba(242,242,242, 1)"};
  transition: 0.3s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
  span {
    padding: 0 1.2rem 0 1rem;
    font-family: inherit;
    font-weight: ${(props) => props.theme.font.fontWeight.medium};
    color: ${(props) => props.theme.colors.neutral.darkGray};
    ${(prop) =>
      prop.active &&
      prop.active &&
      `

    color:${prop.theme.colors.primary.moderateCyan};

`};
  }
  margin: 0 auto;
  cursor: pointer;

  svg {
    circle {
      ${(prop) =>
        prop.active &&
        prop.active &&
        `

                fill: ${prop.theme.colors.primary.moderateCyan};


`};
    }
    path {
      ${(prop) =>
        prop.active &&
        prop.active &&
        `
                fill: white;
`};
    }
  }
`;
