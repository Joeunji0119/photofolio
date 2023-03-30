import { Card } from '../../common/Card';
import { Layout } from '../../common/CommonStyled';
import { colors } from '../../styles/colors';

import * as S from './styled';

const AboutMe = () => {
	return (
		<Layout color={colors.blue1}>
			<S.AboutMeContainer>
				<S.Image src='./images/IMG_3517.jpeg' />
				<S.Info>
					front-end Dev <br /> 조은지
				</S.Info>

				<Card size='large'>afd</Card>
			</S.AboutMeContainer>
		</Layout>
	);
};
export default AboutMe;
