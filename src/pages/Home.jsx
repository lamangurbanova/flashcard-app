import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import ProjectsSection from "../components/Projects.jsx";
import "../assets/style/pages/home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3001/projects");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="homePage">
      <Navbar />
      <div className="container">
        <section className="intro-section">
          <h1>Welcome to Flashcard App</h1>
        </section>

        <div className="about">
          <div className="container w-100 ">
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1>So, who am I?</h1>
                <p>
                  I am Fidan Yusifova. I am an Information Technology student at
                  ADA university.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus deleniti consequatur laudantium, illo culpa rerum
                  quaerat officiis velit odio sit adipisci atque reiciendis, aut
                  similique nesciunt quisquam obcaecati modi voluptates.
                </p>
              </div>
              <div className="col-6">
                <img
                  className="w-100"
                  src="https://images.pexels.com/photos/18398365/pexels-photo-18398365/free-photo-of-individual-shooting-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
};

export default Home;
