/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const StacksTitle = styled.div`
	font-size: 40px;
	font-weight: 700;
	position: absolute;
	left: 3%;
	top: 120%;
`;

export const CardsArea = styled.div`
	width: 100vw;
	margin-top: 10%;
	${({ theme }) => theme.variables.flex('row', 'space-evenly', 'center')}
`;
