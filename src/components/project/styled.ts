/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ProjectTitle = styled.div`
	height: 10%;
	${({ theme }) => theme.variables.flex()}
	font-size: 30px;
	font-weight: 800;
`;

export const projectImg = styled.img`
	height: 70%;
	width: auto;
`;

export const ProjectDescription = styled.div`
	height: 10%;
	${({ theme }) => theme.variables.flex()}
`;

export const RightArrow = styled.div`
	font-size: 30px;
	color: red;
`;
