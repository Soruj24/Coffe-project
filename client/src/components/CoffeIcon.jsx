import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
const CoffeIcon = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="grid container  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="card w-96 my-4 bg-[#F5F5F5] ">
          <figure>
            <img src={icon1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        <div className="card w-96 my-4 bg-[#F5F5F5] ">
          <figure>
            <img src={icon2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        <div className="card w-96 my-4 bg-[#F5F5F5] ">
          <figure>
            <img src={icon3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        <div className="card w-96 my-4 bg-[#F5F5F5] ">
          <figure>
            <img src={icon4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeIcon;
