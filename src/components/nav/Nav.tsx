import * as S from './styled';
import { TfiArrowCircleDown } from 'react-icons/tfi';
import { CATAGORIES } from './CATAGORIES';

const Nav = () => {
	return (
		<S.NavLayout>
			<S.IconLayout>
				<TfiArrowCircleDown />
			</S.IconLayout>
			<S.CatagoriesLayout>
				{CATAGORIES.map(({ id, title }) => (
					<S.Catagories key={id}>{title}</S.Catagories>
				))}
			</S.CatagoriesLayout>
		</S.NavLayout>
	);
};

export default Nav;
