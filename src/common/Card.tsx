/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface LayoutProps {
	size?: 'large' | 'medium' | 'small';
	children: React.ReactNode;
}

interface Size {
	width: string;
	height: string;
	margin?: string;
}

const sizes: Record<string, Size> = {
	large: {
		width: '800px',
		height: '500px',
	},
	medium: {
		width: '500px',
		height: '500px',
	},
	small: {
		width: '80vw',
		height: '500px',
		margin: '3%',
	},
};

export const Card = styled.div<LayoutProps>`
	${({ theme }) => theme.variables.flex('column')};
	border-radius: 10%;
	background: ${({ theme }) => theme.colors.grey1};
	width: ${({ size = 'medium' }) => sizes[size]?.width || sizes.medium.width};
	height: ${({ size = 'medium' }) =>
		sizes[size]?.height || sizes.medium.height};
	margin: ${({ size = 'medium' }) =>
		sizes[size]?.margin || sizes.medium.margin};
`;
