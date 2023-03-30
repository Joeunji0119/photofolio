/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface LayoutProps {
	size?: 'large' | 'medium';
	children: React.ReactNode;
}

interface Size {
	width: string;
	height: string;
}

const sizes: Record<string, Size> = {
	large: {
		width: '500px',
		height: '500px',
	},
	medium: {
		width: '300px',
		height: '500px',
	},
};

export const Card = styled.div<LayoutProps>`
	${({ theme }) => theme.variables.flex('column')};
	background: ${({ theme }) => theme.colors.grey1};
	width: ${({ size = 'medium' }) => sizes[size]?.width || sizes.medium.width};
	height: ${({ size = 'medium' }) =>
		sizes[size]?.height || sizes.medium.height};
	border-radius: 10%;
`;
