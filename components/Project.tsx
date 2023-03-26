import { motion } from "framer-motion";
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
    <Link href={`/projects/${project.slug.toLowerCase()}`}>
      <motion.div
        className={`font-apple easy-in cursor-pointer 
       select-none items-center rounded-lg bg-gradient-to-r shadow-md transition-all 
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
        <div className="w-[100%] rounded-lg bg-zinc-400">
          {/* ここにサムネイルを追加 */}
          {component}
          {/* imageの場合は↓ */}
          {/* <Image alt="image" height={200} src={`/imgs/` + project.image} width={100} /> */}
        </div>
        <div className="w-full px-2 py-4">
          <div>Level:&nbsp;{project.level}</div>
          <div className="flex flex-row items-center justify-between pb-1">
            <h1 className="font-poppins text-[18px] uppercase">{project.name}</h1>
          </div>

          <p className="font-proxima font-normal">{project.description} </p>
          <div className="flex flex-row items-center justify-between pt-2.5">
            <motion.p
              className="mobile:text-[10px] border-b-[1px] border-gray-300
           text-[12px] uppercase text-gray-700 hover:border-gray-900 hover:text-gray-900"
              whileHover={{}}
            >
              Read More
            </motion.p>
            <p className="text-[12px]  uppercase text-gray-900">{project.date}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectComponent;
