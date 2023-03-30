import { Card } from '../../common/Card';
import { Layout, Title } from '../../common/CommonStyled';
import * as S from './styled';

const Stacks = () => {
	return (
		<Layout>
			<Title itemRef='120%'>⚒️ Stacks</Title>
			<S.CardsArea>
				<Card size='medium'>
					<S.FrontEnd>FrontEnd-Stack</S.FrontEnd>
					<S.FrontEndSkill>
						<S.FrontEndSkillArea>
							<S.FrontEndStackImage src='./images/html.png' />
							<S.FrontEndStackImage src='./images/css.png' />
							<S.FrontEndStackImage src='./images/js.png' />
						</S.FrontEndSkillArea>
						<S.FrontEndSkillArea>
							<S.FrontEndStackImage src='./images/react.png' />
							<S.FrontEndStackImage src='./images/typescript.png' />
						</S.FrontEndSkillArea>
						<S.FrontEndSkillArea>
							<S.FrontEndStackImage src='./images/sass.png' />
							<S.FrontEndStackImage src='./images/emotion.jpeg' />
							<S.FrontEndStackImage src='./images/styled-components.png' />
						</S.FrontEndSkillArea>
					</S.FrontEndSkill>
				</Card>
				<Card size='medium'>
					<S.FrontEnd>Communicate</S.FrontEnd>
					<S.FrontEndSkill>
						<S.FrontEndSkillArea>
							<S.FrontEndStackImage src='./images/github.png' />
							<S.FrontEndStackImage src='./images/notion.png' />
							<S.FrontEndStackImage src='./images/slack.png' />
							<S.FrontEndStackImage src='./images/trello.png' />
						</S.FrontEndSkillArea>
					</S.FrontEndSkill>
				</Card>
			</S.CardsArea>
		</Layout>
	);
};

export default Stacks;
