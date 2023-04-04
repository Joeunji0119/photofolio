/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ProjectTitle = styled.div`
	height: 10%;
	${({ theme }) => theme.variables.flex()}
	font-size: 30px;
	font-weight: 800;
`;

export const ImageSize = styled.div`
	height: 500px;
	object-fit: contain;
`;

export const BannerArea = styled.div`
	${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')}
`;

export const projectImg = styled.img`
	height: auto;
	width: 100%;
`;

export const ProjectDescription = styled.div`
	height: 10%;
	${({ theme }) => theme.variables.flex()}
`;

export const LeftArrow = styled.div`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.blue7};
	position: absolute;
	top: 250%;
	left: 3%;
	cursor: pointer;
	:hover {
		font-size: 60px;
	}
`;

export const RightArrow = styled(LeftArrow)`
	left: 88%;
	right: 3%;
`;
