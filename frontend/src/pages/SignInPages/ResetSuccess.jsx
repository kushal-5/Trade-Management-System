import Done from "../../assets/images/signinImages/done.png";
import { Link } from "react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Side: Image */}
      <div className="w-1/2 py-16 ms-20 flex items-center justify-center">
        <img src={Done} alt="Success" className="h-full w-full rounded-lg" />
      </div>

      {/* Right Side: Success Message */}
      <div className="w-1/2 flex flex-col justify-center p-60 items-start">
        <h1 className="text-white font-roboto text-5xl font-semibold text-start">
          Reset Password Success
        </h1>
        <p className="text-white text-base leading-10 mb-14 text-start">
          Your password has been reset successfully!
        </p>

        <div className="flex justify-center items-center w-11/12">
          {/* Success Icon */}
          <div className="flex justify-center items-center w-20 h-20 bg-[#808209] rounded-full mb-10">
            <div className="flex justify-center items-center w-16 h-16 bg-[#CACC21] rounded-full">
              <div className="flex justify-center items-center w-12 h-12 bg-[#E8EB2D] rounded-full">
                <div className="flex justify-center items-center w-10 h-10 bg-[#F1F510] rounded-full">
                  <h1 className="font-bold bg-[#FDFF6C] w-6 h-6 flex justify-center items-center rounded-full text-black">
                    ✓
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}

        <button className="text-black font-roboto text-base font-normal flex justify-center items-center px-8 py-4 gap-3 bg-[#F1F510] rounded-lg w-full  mr-40">
          <Link to="/signin" className="w-full">
            {" "}
            NEXT{" "}
          </Link>
        </button>

        {/* Back to Login */}
        <div className="text-white font-roboto text-base font-normal leading-10 mt-40">
          <Link to="/signin" className="hover:underline">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
