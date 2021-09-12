import styled from 'styled-components';

export const CustomButton = styled.button`
	border: none;
	color: white;
	font-family: ${($props) => $props.theme.font.primary};
	font-weight: ${($props) => $props.theme.font.fontWeight.medium};
	padding: .9rem 2rem;
	border-radius: 5rem;
	font-size: 1rem;

    /* If button type is primary */
	${(props) =>
		props.type &&
		props.type === 'primary' &&
		`
    background: ${props.theme.colors.primary.moderateCyan};
    :hover
    {
        background: ${props.theme.colors.primary.darkCyan};
    }
  `} 
  /* If button type is disabled */
  ${(props) =>
		props.type &&
		props.type === 'disabled' &&
		`
    background: ${props.theme.colors.neutral.darkGray};
  `} 
  
`;
