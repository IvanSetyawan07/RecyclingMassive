"use client";

import NavbarComponent from "../../../components/NavbarComponent";
import FooterComponent from "../../../components/FooterComponent";
export default function ContactPage() {
  return (
    <>
      <NavbarComponent />
      <div className="mt-10 pt-20">
        <p className="font-extrabold text-6xl text-center text-primary">Contact Us</p>
        <p className="font-normal text-center mt-5 text-gray-500 text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      </div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
              Send message
            </button>
          </form>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
