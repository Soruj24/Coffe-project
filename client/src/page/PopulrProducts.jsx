import bg from "../assets/images/more/1.png";
import coffe1 from "../assets/images/1.png";
import coffe2 from "../assets/images/2.png";
import coffe3 from "../assets/images/3.png";
import coffe4 from "../assets/images/4.png";
const PopulrProducts = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-xl font-bold">--- Sip & Savor ---</p>
        <h1 className="text-3xl font-bold">Our Popular Products</h1>
        <button className="btn btn-sm">Add Coffee</button>
      </div>
      <div className="  h-screen  " style={{ backgroundImage: `url(${bg})` }}>
        <div className="container mt-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex bg-slate-200">
              <img src={coffe1} alt="" />
              <div>
                <p>Name: Americano Coffee</p>
                <p>Chef: Mr. Matin Paul</p>
                <p>Price: 890 Taka</p>
              </div>
              <div>
                <p>I-con</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulrProducts;
