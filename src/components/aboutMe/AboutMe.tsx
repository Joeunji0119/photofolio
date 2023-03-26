import { Layout } from '../../common/CommonStyled';
import { colors } from '../../styles/colors';

import * as S from './styled';

const AboutMe = () => {
	return (
		// <S.AboutMeLayout>
		<Layout color={colors.blue1}>
			<S.Image src='./images/IMG_3517.jpeg' />
			<div>front-end Dev</div>
			<div>조은지</div>
			{/* </S.AboutMeLayout> */}
		</Layout>
	);
};
export default AboutMe;
