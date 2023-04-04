import styled from '@emotion/styled';

// const Layout = ({ children }: { children: JSX.Element }) => {
// 	return <ComponentLayout>{children}</ComponentLayout>;
// };

// export default Layout;

export const ComponentLayout = styled.div`
	${({ theme }) => theme.variables.flex('column', 'center', 'center')}
	height: 100vh;
	width: 100vw;
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.colors.black};
`;
