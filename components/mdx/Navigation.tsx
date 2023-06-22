import Link from "next/link";
import React from "react";

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <div className="py-4 pr-6 text-gray-900 dark:text-white">Home</div>
      </Link>
      <Link href="/about">
        <div className="px-6 py-4 text-gray-900 dark:text-white">About</div>
      </Link>
    </nav>
  );
};

export default Navigation;
