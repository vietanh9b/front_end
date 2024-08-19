import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import AllViewJobs from "./components/AllViewJobs";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
      <AllViewJobs/>
    </>
  );
};

export default App;
