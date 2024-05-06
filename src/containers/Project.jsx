import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Project = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [projectList, setProjectList] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectRef = collection(db, "Project");
        const data = await getDocs(projectRef);
        const projects = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjectList(projects);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  const renderTechStack = (techStack) =>
    techStack.map((tech, index) => ( 
         <span
        className=" cursor-default rounded-full mr-2 p-1 bg-texlight/20"
        key={index}
      >
        {tech}
      </span>
    ));

  const viewMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section
      className=" lg:w-11/12 p-5 text-texlight"
    >
      <h2 className="text-center text-3xl lg:text-4xl text-WHITE my-4 hover:scale-105 transition-transform duration-300">Projects
      <div className=" bg-gradient-to-r from-primary to-secondary h-[2px] w-3/5 md:w-2/6 rounded-full mx-auto my-1 "></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projectList.slice(0, visible).map((project) => (
          <div className=" items-center text-justify px-3  text-WHITE border border-texlight/10 rounded-xl">
            <Link to={project.link} className="cursor-pointer">
              <h3 className="py-[6px] text-base font-medium text-center">
                {project.title}
              </h3>
              <hr className=" bg-texlight mb-3" />
              <img
                src={project.img}
                alt="project-img"
                className="h-[200px] w-full rounded-md hover:scale-105 transition-transform duration-200 overflow-hidden"
              />
            </Link>

            <div className="flex justify-between py-3 pr-1">
              <p className="text-sm ">
                {project.tech && renderTechStack(project.tech)}
              </p>
              <button className="p-[1px] bg-gradient-to-r from-primary to-secondary rounded-full" onClick={() => setExpandedProjectId(project.id)}>
                <FaAngleDown className=" bg-bgPrimary p-[1px] text-xl rounded-full" />
              </button>
            </div>
            {expandedProjectId === project.id && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm pb-4"
              >
                {project.desc}
              </motion.p>
            )}
          </div>
        ))}
        <div className=" text-WHITE text-center  rounded-md lg:col-span-1 md:col-span-2 lg:col-start-2 p-[2px] bg-gradient-to-br from-primary to-secondary shadow-sm hover:shadow-primary ">
          <button
            className=" p-2 rounded-md bg-bgPrimary hover:bg-Black text-base cursor-pointer w-full "
            onClick={viewMore}
          >
            View More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;

// bg-secondary shadow-[inset_0px_2px_10px] shadow-WHITE
