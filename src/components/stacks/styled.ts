/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Card } from '../../common/Card';

export const StacksTitle = styled.div`
	font-size: 40px;
	font-weight: 700;
	position: absolute;
	left: 3%;
	top: 120%;
`;

export const CardsArea = styled.div`
	width: 100vw;
	margin-top: 10%;
	${({ theme }) => theme.variables.flex('row', 'space-evenly', 'center')}
`;

export const FrontEnd = styled.div`
	${({ theme }) => theme.variables.flex('row', 'center', 'center')}
	height: 30%;
	font-size: 40px;
	font-weight: 800;
`;

export const FrontEndSkill = styled.div`
	height: 70%;
	/* ${({ theme }) => theme.variables.flex('column', 'center', 'center')} */
`;

export const FrontEndStackImage = styled.img`
	width: 100px;
	height: auto;
	padding: 10px;
	/* :hover {
		width: 110px;
		transition: width 1.5s, height 1.5s, transform 2s;
	} */
`;

export const FrontEndSkillArea = styled.div`
	/* ${({ theme }) => theme.variables.flex()} */
`;
