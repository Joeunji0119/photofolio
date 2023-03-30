import { Card } from '../../common/Card';
import { Layout, Title } from '../../common/CommonStyled';
import * as S from './styled';

const Stacks = () => {
	return (
		<Layout>
			<Title itemRef='120%'>⚒️ Stacks</Title>
			<S.CardsArea>
				<Card size='large'>
					<div>asdfa</div>
				</Card>
				<Card size='large'>
					<div>asdfa</div>
				</Card>
			</S.CardsArea>
		</Layout>
	);
};

export default Stacks;
