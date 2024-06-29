import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./ViewAllJobs";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HomeCards />
			<JobListings />
			<ViewAllJobs />

			{/*<!-- Developers and Employers -->*/}

			{/*    <!-- Browse Jobs -->*/}
		</>
	);
};

export default App;
