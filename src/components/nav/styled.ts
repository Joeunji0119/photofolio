/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const NavLayout = styled.nav`
	${({ theme }) => theme.variables.flex('row', ' flex-start', 'center')};
	background: ${({ theme }) => theme.colors.white};
	position: sticky;
	top: 0;
	z-index: 30;
`;

export const CatagoriesLayout = styled.div`
	${({ theme }) => theme.variables.flex('row', ' flex-start', 'center')};
	height: 100px;
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Catagories = styled.section`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')};
	min-width: 20vw;
	font-size: 17px;
	font-weight: 800;
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.colors.blue7};
		font-size: 18px;
	}
`;

export const IconLayout = styled.div`
	margin: 0 30px;
	font-size: 23px;
	position: sticky;
	${({ theme }) => theme.variables.flex('row', '', 'center')};
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.colors.blue7};
		font-size: 25px;
	}
`;
