import { motion } from "framer-motion";
export default function Icon(props: any) {
  const { classes, url, i } = props;
  return (
    <motion.div
      animate={{ scale: 1, y: 0 }}
      className="scale-100"
      initial={{ scale: 0, y: 10 * 0.5 * i ?? 1 }}
      transition={{ delay: i * 0.2, staggerChildren: 0.5 }}
      viewport={{ amount: 0.5, once: true }}
      whileHover={{ scale: 1.2 }}
    >
      <a
        className=" group m-2 rounded-full border-[0.6px] border-slate-400 
        bg-slate-200 p-2 transition-all ease-in-out
          hover:border-blue-300 hover:bg-blue-100"
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        <motion.i
          className={classes + ` group-hover:scale-110 group-hover:text-blue-700`}
        ></motion.i>
      </a>
    </motion.div>
  );
}
