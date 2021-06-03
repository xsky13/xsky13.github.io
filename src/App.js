import React from 'react';
import { Header } from './Components/Header'
import './App.css';
import { btnPrimary, btnSecondary, input } from './elementClasses';
import { isMobile } from 'react-device-detect';

const App = () => {
	return (
		<>
			<Header />
			<div className="hero flex col items-center m-auto mt-10 md:mt-28 lg:mt-28 w-8/12 mb-14">
				<div className="flex flex-wrap-reverse justify-center w-full items-center">
					<div className="mx-2 my-4 text-center md:text-left lg:text-left">
						<p className="text-gray-600 text-xl mb-3">Hey there! </p>
						<h1 className="text-6xl md:text-7xl lg:text-7xl">I'm Jared Peter</h1>
						<p className="text-2xl font-extralight text-gray-600 my-3">I’m a full stack web devloper</p>
						<div className="flex justify-center md:justify-start lg:justify-start">
							<a href="https://www.fiverr.com/xsky13" className={btnPrimary + ' my-2'}>Hire Me</a>
							{
								isMobile ? <a href="#project" className={btnSecondary + ' mr-2 my-2'}>View My Projects</a> : <a href="#projects" className={btnSecondary + ' mx-4 my-2'}>View My Projects</a>
							}
						</div>
					</div>
					<div className="mx-2 my-4">
						<img src="./assets/images/Me.png" className="rounded-full" width="300" alt="Me" />
					</div>
				</div>
			</div>
			<div id="projects" className="block m-auto pt-32 md:pt-72 lg:pt-72 pb-10 flex justify-center">
				<div className="flex flex-col justify-center items-center w-8/12">
					<h1 className="text-5xl md:text-6xl lg:text-6xl text-center" id="project">My Projects</h1>
					<div className="flex flex-wrap justify-center mt-5">
						<div className="project xsm:w-64 w-80 m-4 md:w-96 sm:w-96 lg:w-96 p-7 shadow-lg rounded-lg bg-white">
							<div className="flex items-center">
								<img src="https://xsky13.github.io/RedFeed/favicon.ico" width="40" alt="RedFeed" />
								<h1 className="text-3xl mt-2 ml-2">RedFeed</h1>
							</div>
							<p className="text-gray-600 text-lg mt-3">RedFeed is a Reddit Feed where you can view posts</p>
							<a href="https://xsky13.github.io/RedFeed" target="_blank" rel="noreferrer" className={btnSecondary + ' my-3'}>View Live</a>
						</div>
						<div className="project xsm:w-64 w-80 m-4 md:w-96 sm:w-96 lg:w-96 p-7 shadow-lg rounded-lg bg-white">
							<div className="flex items-center">
								<img src="./assets/images/portfolio.png" width="40" alt="RedFeed" />
								<h1 className="text-3xl mt-2 ml-2">Portfolio Website</h1>
							</div>
							<p className="text-gray-600 text-lg mt-3">This project is an example portfolio website</p>
							<a href="https://xsky13.github.io/portfolio-project" target="_blank" rel="noreferrer" className={btnSecondary + ' my-3'}>View Live</a>
						</div>
						<div className="project xsm:w-64 w-80 m-4 md:w-96 sm:w-96 lg:w-96 p-7 shadow-lg rounded-lg bg-white">
							<div className="flex items-center">
								<img src="https://xsky13.github.io/TodoList/favicon.ico" width="40" alt="RedFeed" />
								<h1 className="text-3xl mt-2 ml-2">TodoList</h1>
							</div>
							<p className="text-gray-600 text-lg mt-3">TodoList is a react application for task management. You can add, mark as finished, and delete items</p>
							<a href="https://xsky13.github.io/TodoList" target="_blank" rel="noreferrer" className={btnSecondary + ' my-3'}>View Live</a>
						</div>
					</div>
				</div>
			</div>
			<div id="skills" className="flex items-center pt-32 md:pt-72 lg:pt-72 pb-10">
				<div className="block mx-auto w-full lg:w-8/12">
					<h1 className="text-5xl md:text-6xl lg:text-6xl text-center">My Skills</h1>
					<div className="flex flex-wrap justify-center mt-5">
						<div className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/html.svg" width="100" alt="HTML" />
						</div>
						<div className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/css.svg" width="100" alt="CSS" />
						</div>
						<div className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/javascript.svg" width="100" alt="JavaScript" />
						</div>
						<div className="skill m-2 p-7 shadow-lg rounded-lg flex bg-white">
							<img src="./assets/images/icons/php.svg" width="100" alt="PHP" />
						</div>
						<a href="http://reactjs.org" className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/react.png" width="100" alt="React" />
						</a>
						<a href="http://jquery.com" className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/jquery.svg" width="100" alt="jQuery" />
						</a>
						<a href="tailwindcss.com" className="skill m-2 p-7 shadow-lg rounded-lg bg-white">
							<img src="./assets/images/icons/tailwind.png" width="100" alt="Tailwind CSS" />
						</a>
					</div>
					<p className="text-gray-600 text-xl mt-2 text-center">And more</p>
				</div>
			</div>
			<div id="contact" className="flex items-center pt-32 md:pt-72 lg:pt-72 pb-10 pb-60">
				<div className="block mx-auto w-full lg:w-8/12">
					<h1 className="text-5xl md:text-6xl lg:text-6xl text-center">Contact Me</h1>
					<form action="" className="xsm:w-64 sml:w-80 sm:w-96 block m-auto md:w-9/12">
						<div className="form-group">
							<label htmlFor="email" className="text-lg text-gray-600">Your Email</label><br />
							<input type="text" id="email" className={input + ' w-full'} />
						</div>
						<div className="form-group mt-3">
							<label htmlFor="message" className="text-lg text-gray-600">Your Message</label><br />
							<textarea type="text" id="message" rows="7" className={input + ' w-full'}></textarea>
						</div>
						<button className={btnPrimary + ' mt-3 w-full lg:w-auto'}>Send Message</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
