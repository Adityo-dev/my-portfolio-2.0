import Image from "next/image";
import Link from "next/link";

// navBar data
const navBarData = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Work", link: "/#work" },
  { id: 4, name: "Services", link: "/services" },
  { id: 5, name: "Contact", link: "/contact" },
];
function NavigationBar() {
  return (
    <nav className="container mx-auto px-6 flex justify-between items-center py-4">
      <Link href={"/"} className="">
        <Image src={"/logo/coding.png"} width={50} height={50} alt="" />
      </Link>

      <ul className="space-x-8">
        {navBarData.map((item) => (
          <Link key={item?.id} href={item?.link}>
            {item?.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
