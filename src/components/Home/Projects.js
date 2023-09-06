/** @format */

const projectData = [
	{
		title: "Formula 1 Landing Page.",
		imgSrc: "/img/P1 (2).png",
		desc: "Being a huge fan of Formula 1, I've made a good looking landing page on the current 2022 season. It includes the team name along with their current drivers as well as some information about the team.",
	},
	{
		title: "Braincoats Fan Website.",
		imgSrc: "/img/P1 (1).png",
		desc: "A minimal fan-made website of the band Braincoats. Ever since I discovered them on Youtube, I became obsessed with the band and their music. This site includes an about page, a photo gallery and a full discography section with some of their best tracks.",
	},


	{
		title: "Taskify.",
		imgSrc: "/img/P1 (3).png",
		desc: "A simple yet effective CRUD app made with Javascript. This will handle all your tasks with the option to change or delete a pre-existing task. Utilise your time with Taskify without needing to worry about forgetting your tasks.",
	},
];
const Projects = () => {
	return (
		<div id='projects'>
			<div id='sec4'>
				<div id='info11'>
					<span>03.</span> Some Things I've Built
				</div>
				<div className='inner4'>
					<p id='info12'>
						In 2021 I learned the basics and made my first project: a landing page. As time flew by I practised more and learned new skills. And soon I became capable of making some interesting projects of my liking. Given below are some web projects which I thought would be cool to showcase them.
					</p>
				</div>
			</div>

			{projectData.map((project, i) => {
				return (
					<div id='project1' key={i}>
						<img src={project.imgSrc} />
						<div className='projectDesc'>
							<div id='info13'>{project.title}</div>
							<div id='project1Desc'>
								<div id='info14'>{project.desc}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Projects;
