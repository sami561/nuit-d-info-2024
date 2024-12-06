import { Link } from "react-router-dom";
import { logo } from "../assets";
const Footer = () => {
  return (
    <footer className=" items-center p-4 bg-base-200 text-base-content absolute bottom-0 border-t border-base-300/50 w-full flex-row pt-20">
      <aside className="items-center grid-flow-col">
        <img src={logo} alt="logo" width="50" height="50" />
        <Link href={"https://ratiscrum.fr/"}>
          <p className="opacity-70 hover:opacity-100 transition">
            Copyright © 2023 EPI-FRATENITÉ SANS BANNIÉRES
          </p>
        </Link>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Connaisez vous le Konami Code ? Ouvrez grand les oreilles ;)</p>
      </nav>
    </footer>
  );
};

export default Footer;
