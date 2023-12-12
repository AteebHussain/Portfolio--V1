/** @format */

const projectData = [
	{
		title: "PortScann.",
		imgSrc: "/img/P1 (1).png",
		desc: "Being an Open Source Intelligence enthusiast, I made this port scanner using python. It's a simple 40-line code program which can scan 5000 ports accurately and tell which one is open. Good for web security.",
	},
	{
		title: "Braincoats Fan Website.",
		imgSrc: "/img/P1 (2).png",
		desc: "A minimal fan-made website of the band Braincoats. Ever since I discovered them on Youtube, I became obsessed with the band and their music. This site includes an about page, a photo gallery and a full discography section with some of their best tracks.",
	},
	{
		title: "CodeBlog.",
		imgSrc: "/img/P1 (3).png",
		desc: "A blog site inclined towards CSE students. Gives users the ability to create, edit or delete their blogs. The blogs have a detailed descripion alongwith a code editor for programs. Users can also comment on their/others blog posts.",
	},
	{
		title: "Panorama Point.",
		imgSrc: "/img/P1 (4).png",
		desc: "Choose Panorama Point for an immersive portfolio experience. Elevate your online presence with a seamless blend of aesthetics and functionality, capturing attention and leaving a lasting impression. Its panoramic design ensures your portfolio is presented in a visually striking manner.",
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
