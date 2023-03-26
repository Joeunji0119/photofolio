/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const AboutMeLayout = styled.section`
	${({ theme }) => theme.variables.layout()}
`;

export const Image = styled.img`
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 100%;
`;
