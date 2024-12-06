import { Link } from "react-router-dom";
import { logo } from "../assets";
const Footer = () => {
  return (
    <footer className=" bg-slate-400 flex flex-row justify-between ">
      <aside className="  flex flex-row p-5 align-middle gap-4">
        <img src={logo} alt="logo" width="50" height="50" />
        <Link href={"https://ratiscrum.fr/"}>
          <p className="opacity-70 hover:opacity-100 transition mt-3">
            Copyright © 2024
          </p>
        </Link>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p className="font-bold cursor-pointer flex">
          <span className="text-purple-500">EPI-</span>
          <span className="text-cyan-400">FRATENITÉ SANS BANNIÉRES</span>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
