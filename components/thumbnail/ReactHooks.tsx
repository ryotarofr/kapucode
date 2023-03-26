// import Image from 'next/image';

// import styles from "./ReactHooks.module.scss"

export const ReactHooks = (props: any) => {
  const { project, i } = props;

  return (
    <div>
      a{/* <EarthCanvas /> */}
      {/* <div className='flex'>
        <div className='text-red-400 text-2xl pt-2 font-mono'>React Hooks</div>
        <div>
          <Image alt="gif" className=' relative top-2 left-2' height={20} src="/react.gif" width={30} />
        </div>
        <Image alt="image" height={200} src={`/imgs/` + project.image} width={100} />
      </div> */}
      {/* タイピングアニメーション */}
      {/* <div className='my-8'>
        <div className={styles.text} >const [state, setState] = useState()</div>
        <div className={styles.text_reverse} >const [state, setState] = useState()</div>
      </div> */}
    </div>
  );
};
