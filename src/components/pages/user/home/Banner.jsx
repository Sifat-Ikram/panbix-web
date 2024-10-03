import banner from "../../../../assets/images/banner/welcomebnr.png";

const Banner = () => {
  return (
    <div className="w-full">
      <img src={banner} className="w-full object-cover" />
    </div>
  );
};

export default Banner;
