import React from "react";
import Title from "./Title";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import toast from "react-hot-toast";

// [IMPORTANT] The access key is a public key (not API Key)
// Hence there is no need to hide the key :)

const Contact = ({ theme }) => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "9ec44c18-fea2-4de6-8a75-56c7a3e3ab11");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for getting in touch!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-7 p-4 sm:px-12 lg:px-24 xl:px-40 scroll-mt-30 text-gray-800 dark:text-white"
    >
      <Title title="Catch The Cart" desc="We'd love to hear from you!" />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="text-xl font-semibold mb-2">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-pink-300">
            <img src={HouseOfBerryAssets.name_icon} alt="" className="h-10" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-m outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-xl font-medium">Email Address</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-pink-300">
            <img src={HouseOfBerryAssets.email_icon} alt="" className="h-10" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-m outline-none"
              required
            />
          </div>
        </div>

        {/* Phone Number? */}

        <div className="sm:col-span-2">
          <p className="mb-2 text-xl font-medium">Phone Number</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-pink-300">
            <img src={HouseOfBerryAssets.phone} alt="" className="h-9 pt-2" />
            <input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 text-m outline-none"
              required
            />
          </div>
        </div>



<div className="sm:col-span-2 relative">
  <p className="mb-2 text-xl font-medium">Leave A Message</p>

  <div className="relative flex items-start rounded-lg border border-gray-300 dark:border-pink-300">
    <img
      src={HouseOfBerryAssets.coffee}
      alt=""
      className="absolute left-3 top-3 w-10 h-10 pointer-events-none"
    />

    <textarea
      name="message"
      rows={8}
      placeholder="Enter your message"
      className="w-full pl-14 p-3 text-m outline-none rounded-lg bg-transparent leading-[40px]"
      required
    />
  </div>
</div>






        <button className="w-max flex gap-2 bg-primary dark:bg-gray-700 text-black dark:text-primary text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
          Submit
          <img
            src={
              theme === "dark"
                ? HouseOfBerryAssets.arrow_pink
                : HouseOfBerryAssets.arrow_black
            }
            alt=""
            width={15}
          />
        </button>
      </form>
    </div>
  );
};

export default Contact;
