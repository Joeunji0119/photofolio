import AboutMe from '../components/aboutMe/AboutMe';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Project from '../components/project/Project';
import Stacks from '../components/stacks/Stacks';

const Home = () => {
	return (
		<>
			<Nav />
			<AboutMe />
			<Stacks />
			<Project />
			<Contact />
		</>
	);
};

export default Home;
