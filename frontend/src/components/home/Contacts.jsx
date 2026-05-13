import Right from "@/assets/icons/Right.png";
import call from "@/assets/icons/call.png";
import sms from "@/assets/icons/sms.png";
import clock from "@/assets/icons/clock.png";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="text text-center justify-center mt-20">
        <p className="text-5xl">
          Let&apos;s <span className="text-[#f3f510]"> Get in Touch </span>
        </p>
        <p className="text-[#f3f2f2] mt-5 mb-10">
          If you&apos;re ready to take your trading to the next level, contact
          us today. Our consultants are here to help you succeed.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center w-full max-w-7xl">
          <form className="w-1/2 pr-4">
            <div className="relative z-0 mb-8 mt-5">
              <input
                type="text"
                name="floating_full_name"
                id="floating_full_name"
                className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute px-5 text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Full name
              </label>
            </div>

            <div className="relative z-0 mb-8">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute px-5 text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>

            <div className="relative z-0 mb-4">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute px-5 text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center mt-10 text-[#000000] bg-[#f3f510] rounded-lg text-lg w-full px-5 py-3 text-center"
            >
              Send Message
              <img className="ml-2" src={Right} alt="Right Arrow" />
            </button>
            <p className="mt-8 text-md">
              By sending message you agree to Privacy Policy and Terms of
              Condition.
            </p>
          </form>

          <div className="w-1/2 bg-[#04181D] px-8 py-6">
            <p className="text-[#fef510] text-3xl mb-7">Info</p>

            <p className="flex items-center mb-8 border-b py-5 border-gray-700">
              <img className="mr-2" src={sms} alt="sms" />
              info@getintouch.com
            </p>

            <p className="flex items-center mb-8 border-b py-5 border-gray-700">
              <img className="mr-2" src={call} alt="call" />
              +977 9812957077
            </p>

            <p className="flex items-center border-b py-5 border-gray-700">
              <img className="mr-2" src={clock} alt="clock" />
              11:00 a.m-3:00 p.m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
