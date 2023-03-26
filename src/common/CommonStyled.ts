/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Layout = styled.div`
	${({ theme }) => theme.variables.flex()}
	height: 70vh;
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.colors.black};
`;
