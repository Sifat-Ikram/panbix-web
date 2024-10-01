import Banner from "./Banner";
import { Link } from "react-router-dom";
import task from "../../../../assets/images/dashboard/task.png";
import deposit from "../../../../assets/images/dashboard/deposit.png";
import withdraw from "../../../../assets/images/dashboard/withdraw.png";
import packages from "../../../../assets/images/dashboard/package.png";
import profile from "../../../../assets/images/dashboard/profile.png";
import refer from "../../../../assets/images/dashboard/refer.png";
import transaction from "../../../../assets/images/dashboard/transaction.png";
import helpline from "../../../../assets/images/dashboard/helpline.png";
import youtube from "../../../../assets/images/dashboard/youtube.png";

const Home = () => {
  const cards = [
    { img: task, title: "My Work", link: "/dashboard/user/task" },
    { img: deposit, title: "Deposit", link: "/dashboard/user/deposit" },
    { img: withdraw, title: "Withdraw", link: "/dashboard/user/withdraw" },
    { img: packages, title: "Packages", link: "/dashboard/user/package" },
    { img: profile, title: "Profile", link: "/dashboard/user/account" },
    { img: refer, title: "Refer", link: "/dashboard/user/referral" },
    { img: transaction, title: "Transaction", link: "/dashboard/user/transaction" },
    { img: helpline, title: "Helpline", link: "/dashboard/user/helpline" },
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen mb-8">
      <div>
        <Banner />
      </div>
      <div className="p-6 w-full">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">All Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cards.map((service, id) => (
              <Link to={service.link} key={id} className="group">
                <div className="flex items-center flex-col p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-18 w-18 mb-3"
                  />
                  <h2 className="text-black font-medium text-center group-hover:text-[#0E9C7E]">
                    {service.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <Link className="flex max-md:flex-col max-md:space-y-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform overflow-hidden mt-6">
          <div className="w-full md:w-2/5 h-52">
            <img
              src={youtube}
              alt="youtube tutorial"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-2xl font-bold mb-2">Watch Our Tutorial</h2>
            <p className="text-sm mb-4">
              Learn how to navigate your dashboard and make the most of our
              services.
            </p>
            <button className="px-6 py-2 bg-[#0E9C7E] text-white rounded-full shadow-md hover:bg-[#0c8269] transition">
              Watch Now
            </button>
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#0E9C7E] bg-opacity-40 rounded-full mix-blend-multiply blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#0c8269] bg-opacity-40 rounded-full mix-blend-multiply blur-lg"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;