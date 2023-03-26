import styled from '@emotion/styled';

const Layout = ({ children }: { children: JSX.Element }) => {
	return <ComponentLayout>{children}</ComponentLayout>;
};

export default Layout;

const ComponentLayout = styled.div``;
