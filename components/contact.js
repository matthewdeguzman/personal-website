import contactCss from "../styles/Contact.module.css";
export default function Contact() {
  return (
    <>
      <div className="mx-auto mt-5 w-full md:max-w-4xl md:mt-0">
        <form action="#" method="POST">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className={contactCss.textBox}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className={contactCss.textBox}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className={contactCss.textBox}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className={contactCss.textBox + " resize-none hover:resize-y"}
                />
              </div>
            </div>

            <div className="text-center px-4 mt-6 sm:px-6">
              <button
                type="submit"
                className="rounded-md bg-gray-900 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
