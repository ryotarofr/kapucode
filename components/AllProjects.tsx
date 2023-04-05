import { motion } from "framer-motion";

import { projects } from "../data/projects";

import ProjectComponent from "./Project";

const textUpAnimate = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    transition: { bounce: 0.4, duration: 1, type: "spring" },
    y: 0,
  },
};
function AllProjects() {
  return (
    <motion.div
      className="bg-fill  bg-[url('/url')] bg-cover bg-no-repeat"
      id="projects"
      initial={"offscreen"}
      transition={{ staggerChildren: 0.5 }}
      variants={textUpAnimate}
      viewport={{ amount: 0.3, once: true }}
      whileInView={"onscreen"}
    >
      <div className="pb-24 backdrop-blur-[100px]">
        <div className="desktop:container">
          <div className="tablet:max-w-[550px] m-auto max-w-[1000px] p-2 ">
            <div className="py-20 px-4">
              <motion.h1
                className="font-poppins pb-1 text-center text-3xl uppercase"
                initial={"offscreen"}
                transition={{ delay: 3 }}
                variants={textUpAnimate}
                viewport={{ amount: 0.5, once: false }}
                whileInView={"onscreen"}
              >
                Contents
              </motion.h1>

              <motion.p
                className="font-proxima text-center text-[18px] text-slate-100"
                initial={"offscreen"}
                transition={{ delay: 3 }}
                variants={textUpAnimate}
                viewport={{ amount: 0.5, once: false }}
                whileInView={"onscreen"}
              ></motion.p>
            </div>
            <div className="mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2 grid grid-cols-1 gap-4">
              {projects.map((project: any, i: number) => (
                <ProjectComponent i={i} key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AllProjects;
