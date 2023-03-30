import Link from "next/link";

const NavbarItem = ({ nextId, setCurrentId, setNextId }: any) => {
  // const [currentId, setCurrentId] = useState(0)
  // const [nextId, setNextId] = useState(1)

  function handleClick() {
    setCurrentId(nextId);
    setNextId(nextId + 1);
  }

  return (
    <Link href={`#${nextId}`} onClick={handleClick} scroll={true}>
      <li
        className="mobile:text-[14px] tablet:text-[14px] tablet:px-1 mx-3
       my-1 cursor-pointer uppercase hover:border-b  hover:border-b-blue-700 hover:text-blue-700"
      >
        {nextId}
      </li>
    </Link>
  );
};

export default NavbarItem;
