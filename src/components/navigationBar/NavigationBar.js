import Link from "next/link";

// navBar data
const navBarData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Work", link: "/work" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];
function NavigationBar() {
  return (
    <nav className="container mx-auto absolute top-0 left-0 right-0 px-6 flex justify-between items-center py-4">
      <Link href={"/"} className="text-lg uppercase">
        Aditto dev
      </Link>

      <ul className="space-x-8">
        {navBarData.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
