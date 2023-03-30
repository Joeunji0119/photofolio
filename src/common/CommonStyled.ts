/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Layout = styled.div`
	${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
	height: 100vh;
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.div`
	font-size: 40px;
	font-weight: 700;
	position: absolute;
	left: 3%;
	top: ${({ itemRef }) => itemRef};
`;
