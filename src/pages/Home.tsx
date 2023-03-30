import AboutMe from '../components/aboutMe/AboutMe';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Catbow from '../components/project/catbow/Catbow';
import Koda from '../components/project/koda/Koda';
import Winnerest from '../components/project/winnerest/Winnerest';

import Stacks from '../components/stacks/Stacks';

const Home = () => {
	return (
		<>
			<Nav />
			<AboutMe />
			<Stacks />
			<Catbow />
			<Koda />
			<Winnerest />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
