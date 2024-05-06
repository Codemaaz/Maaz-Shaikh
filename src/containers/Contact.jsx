import React from "react";

const Contact = () => {
  const inputStyles =
    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  return (
    <section className=" text-texlight lg:w-11/12 p-5">
      <h2 className="text-3xl lg:text-4xl text-center text-WHITE hover:scale-105 transition-transform duration-300 my-4 ">
        Let's Talk
        <div className=" bg-gradient-to-r from-primary to-secondary h-[2px] w-3/5 md:w-2/6 rounded-full mx-auto my-1 "></div>
      </h2>

      <form
        className="mx-auto max-w-xl "
        action="https://docs.google.com/forms/d/e/1FAIpQLSeEtPEQ3NAKrfcQN1BaJWuFn8Hs8ATK3hQHWEXD_4VaOcRzuQ/formResponse"
        method="POST"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mt-2">
            <input
              type="text"
              placeholder="First Name"
              name="entry.1489634656"
              id="first-name"
              className={inputStyles}
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Last Name"
              name="entry.1107565790"
              id="last-name"
              className={inputStyles}
            />
          </div>
          <div className="mt-2 lg:row-span-2">
            <textarea
              name="entry.1466331221"
              placeholder="Message"
              id="message"
              rows="4"
              className={inputStyles}
            ></textarea>
          </div>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Email"
              name="entry.900419701"
              id="email"
              className={inputStyles}
            />
          </div>
          <div className="my-8 lg:mt-2 lg:col-start-2 rounded-md p-[2px] bg-gradient-to-br from-primary to-secondary shadow-sm hover:shadow-primary ">
            <button
              type="submit"
              className="w-full rounded-md bg-bgPrimary hover:bg-Black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
