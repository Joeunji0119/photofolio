import { useEffect, useRef } from 'react';
import { Card } from '../../common/Card';
import { CardsArea, Layout, Title } from '../../common/CommonStyled';
import { colors } from '../../styles/colors';
import * as S from './styled';

const Project = () => {
	const widthRef = useRef<HTMLDivElement>(null);
	const bannerRef = useRef<HTMLDivElement>(null);
	const activeIndex = useRef<number>(1);

	useEffect(() => {
		activeIndex.current = 1;
		let imgWidth = widthRef?.current?.offsetWidth ?? 500;

		let moveX = (activeIndex.current - 1) * imgWidth * 0.86;

		let len = projectDatas.length;

		// bannerRef.current.style.transform = `translateX(-${moveX}px`;

		// 	if (activeIndex > projectDatas.length - 1) {
		// 		setActiveIndex(prev => (prev = 2));
		// 	}
	}, [activeIndex.current]);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setActiveIndex(prev => prev + 1);
	// 	}, 3000);
	// 	return () => clearInterval();s
	// }, []);

	return (
		<Layout color={colors.blue1}>
			<Title itemRef='220%'>📝 projects</Title>

			<CardsArea ref={widthRef}>
				{projectDatas.map(
					({ id, title, projectImg, description_1, description_2 }) => {
						return (
							<Card key={id} size='small' ref={bannerRef}>
								<S.ProjectTitle>{title}</S.ProjectTitle>
								<S.projectImg src={projectImg} />
								<S.ProjectDescription>
									{description_1}
									<br />
									{description_2}
								</S.ProjectDescription>
							</Card>
						);
					}
				)}
			</CardsArea>
		</Layout>
	);
};
export default Project;

const projectDatas = [
	{
		id: 1,
		title: 'Catbow-ScrollView',
		projectImg:
			'https://blog.kakaocdn.net/dn/bdNVgy/btrTMR3VYBQ/nvj17gv2W32VgTQq2AZWok/img.gif',
		description_1: 'npm i react-catbow-scrollview',
		description_2: 'Scroll 인터랙션을 제공하는 리액트 라이브러리',
	},
	{
		id: 2,
		title: 'Koda',
		projectImg:
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp02sg%2FbtrPdcQPJja%2FmJKos45WmvTZA4ZGorAZg1%2Fimg.gif',
		description_1: '설문지 Tool 웹 페이지 제작',
		description_2: '설문조사, 행사 참여',
	},
	{
		id: 3,
		title: 'Winnerest',
		projectImg:
			'https://blog.kakaocdn.net/dn/WkWqx/btrLK0Hyyr9/KkfkN6HGdlVmrWjhyD8PUk/img.gif',
		description_1: '사진을 모아볼 수 있는 페이지 제작',
		description_2: '',
	},
	// {
	// 	id: 4,
	// 	title: 'Catbow-ScrollView',
	// 	projectImg:
	// 		'https://blog.kakaocdn.net/dn/bdNVgy/btrTMR3VYBQ/nvj17gv2W32VgTQq2AZWok/img.gif',
	// 	description_1: 'npm i react-catbow-scrollview',
	// 	description_2: 'Scroll 인터랙션을 제공하는 리액트 라이브러리',
	// },
];
