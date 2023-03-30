import styled from '@emotion/styled';

const Layout = ({ children }: { children: JSX.Element }) => {
	return <ComponentLayout>{children}</ComponentLayout>;
};

export default Layout;

export const ComponentLayout = styled.div`
	${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
	height: 100vh;
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.colors.black};
`;
