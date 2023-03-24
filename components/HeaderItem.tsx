import Link from "next/link";

const HeaderItem = (props: any) => {
  return (
    <Link href={`#${props.name.toLowerCase()}`} scroll={true}>
      <li
        className="mobile:text-[14px] tablet:text-[14px] tablet:px-1 mx-3
       my-1 cursor-pointer uppercase hover:border-b  hover:border-b-blue-700 hover:text-blue-700"
      >
        {props.name}
      </li>
    </Link>
  );
};

export default HeaderItem;
