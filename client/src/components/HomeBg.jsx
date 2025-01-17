import bg from "../assets/images/more/3.png";
const HomeBg = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className="flex justify-between">
            <div className="w-1/2"></div>
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="mb-5">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBg;
