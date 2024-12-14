"use client"
import { usePathname } from "next/navigation";
import "../globals.css";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  let str = pathname.replace('/', "").replace("%20", " ")
  if (str.includes("/")) {
    str = str.split('/')[1].length == 1 ? str.split('/')[0] : str.split('/')[1]
  }
  return (
    <div className="mt-5">
      <div className="container rounded-md px-2 py-3 bg-gray-light text-sm ">
        <div className="px-3 flex items-center justify-start capitalize">
          <Link className="mr-2" href="/">
            Home
          </Link>
          <FaAngleRight className="h-6 mr-2  text-sm" />
          <Link href={pathname}>
            {str}
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
