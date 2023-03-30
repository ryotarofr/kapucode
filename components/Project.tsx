import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/projects";

import { ReactHooks } from "./thumbnail/ReactHooks";

const textUpAnimate = {
  onscreen: {
    opacity: 1,
    transition: { bounce: 0.4, duration: 0.6, type: "spring" },
    y: 0,
  },
};
function ProjectComponent(props: any) {
  const { project, i } = props;

  // projectの各コンポーネントを渡すための配列を作る
  const slugs = Array.from<any, string>(projects, (project) => project.slug);
  let component;
  switch (project.slug) {
    case slugs[0]:
      component = <ReactHooks project={project} />;
      break;
    case slugs[1]:
      component = <div>b test</div>;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <div>
      <motion.div
        className={`font-apple easy-in cursor-pointer 
       select-none rounded-lg bg-gradient-to-r shadow-md transition-all 
       md:flex md:flex-row ${project.name.toLowerCase()}`}
        initial={{ opacity: 0, y: 50 * (i * 0.7) }}
        variants={textUpAnimate}
        viewport={{ amount: 0.7, once: true }}
        whileHover={{
          scale: 0.98,
          transition: { bounce: 0.4, duration: 0.2, type: "spring" },
        }}
        whileInView={{ transition: { delay: i * 0.4, duration: 0.3 }, y: 0 }}
      >
        <div className="h-full w-[100%] bg-purple-400 md:w-[60%]">
          {/* ここにサムネイルを追加 */}
          {component}
          {/* imageの場合は↓ */}
          <Image
            alt="image"
            className="mx-auto my-auto object-contain"
            height={200}
            src={`/imgs/` + project.image}
            width={360}
          />
        </div>
        <div className="ml-4 w-full px-2 py-4">
          <div className="my-2 w-fit rounded-full border border-purple-500 px-2 text-lg text-purple-500">
            Level:&nbsp;{project.level}
          </div>
          <div className="flex flex-row items-center justify-between pb-1">
            <h1 className="font-poppins text-[24px] uppercase text-violet-900">{project.name}</h1>
          </div>

          <p className="font-proxima ml-2 mb-2 text-lg font-normal text-gray-700">
            {project.description}{" "}
          </p>
          <div className="flex flex-row items-center justify-around pt-2.5">
            <Link href={`/projects/${project.slug.toLowerCase()}`}>
              <motion.p
                className="invisible border-b-[1px] border-purple-500 text-[18px]
           uppercase text-gray-700 hover:border-gray-900 hover:text-purple-600 sm:visible"
                whileHover={{}}
              >
                Read More
              </motion.p>
            </Link>
            <p className="text-[12px]  uppercase text-gray-900">{project.date}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectComponent;
