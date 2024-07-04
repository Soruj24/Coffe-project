import logo from "../assets/images/more/logo1.png";
import bgImg from "../assets/images/more/15.jpg"
const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="flex h-[120px] justify-center items-center gap-2">
      <img className="w-16" src={logo} alt="" />
      <h1 className="text-3xl font-serif   text-white font-bold">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
