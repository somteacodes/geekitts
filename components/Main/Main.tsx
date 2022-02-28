import Image from 'next/image'
export default function Main() {
  return (
    <>
      {/* how we make it easy */}
      <section className="my-24">
        <p className="text-3xl font-bold py-8   text-center relative z-10 leading-normal ">
          How we make it <br />
          <span className="bg-cyan-500 px-2 pl-5">easy.</span>
        </p>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="drop-shadow-xl bg-white rounded-lg p-14 bg-[length:15vmin_auto] lg:bg-[length:5vmin_auto]  bg-right-bottom  bg-no-repeat cursor-pointer hover:scale-105 transition ease-in-out "
            style={{ backgroundImage: `url('./images/chat_bubble.svg')` }}
          >
            <p className="text-xl font-bold pb-3">Dicuss</p>
            <p>
              We start off with a discussion, to outline all your requirements.
              You want to build your own metaverse, well lets discuss and
              outline what it would look like.
            </p>
          </div>
          {/* design */}
          <div
            className="drop-shadow-xl bg-white rounded-lg p-14 bg-[length:15vmin_auto] lg:bg-[length:5vmin_auto]  bg-right-bottom  bg-no-repeat cursor-pointer hover:scale-105 transition ease-in-out"
            style={{ backgroundImage: `url('./images/design.svg')` }}
          >
            <p className="text-xl font-bold pb-3">Design</p>
            <p>
              From wireframes to flows to prototype. We turn those ideas to
              visual representation of what it is meant to look like. Its that
              simple.
            </p>
          </div>

          {/* develop */}
          <div
            className="drop-shadow-xl bg-white rounded-lg p-14 bg-[length:15vmin_auto] lg:bg-[length:5vmin_auto] bg-right-bottom  bg-no-repeat cursor-pointer hover:scale-105 transition ease-in-out"
            style={{ backgroundImage: `url('./images/develop.svg')` }}
          >
            <p className="text-xl font-bold pb-3">Develop</p>
            <p>
              Building your solution from front to back, using Test Driven
              Development. making sure your idea can scale.
            </p>
          </div>

          {/* deploy */}
          <div
            className="drop-shadow-xl bg-white rounded-lg p-14 bg-[length:15vmin_auto] lg:bg-[length:5vmin_auto] bg-right-bottom  bg-no-repeat cursor-pointer hover:scale-105 transition ease-in-out"
            style={{ backgroundImage: `url('./images/deploy.svg')` }}
          >
            <p className="text-xl font-bold pb-3">Deploy</p>
            <p>
              Building your solution from front to back, using Test Driven
              Development. making sure your idea can scale.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-900 body-font my-24 mt-48">
        <p className="text-3xl font-bold pb-20  text-center relative z-10 leading-normal ">
          The Geek <span className="bg-orange-200 px-2 ">Touch</span>
          <p className="text-center text-base font-normal">
            Range of our services
          </p>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
          <div className="hover:shadow-lg cursor-pointer p-8 rounded-lg transition ease-in-out hover:scale-105  ">
            <Image
            className="mx-auto"
            alt="Geek Code Planet"
            src="/images/software.svg"
            layout='fixed'
            width={56}
            height ={56}
             
             
            />
            <p className="font-bold text-lg">Custom Software Development</p>
            <p>
              Businesses have general, yet unique challenge, so solutions must
              comply with specified and unique needs.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Client First</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aliquam commodi perspiciatis, iste quas accusamus eligendi
              provident sint similique et.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Client First</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aliquam commodi perspiciatis, iste quas accusamus eligendi
              provident sint similique et.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-900 body-font py-20 bg-[#FFF7F2] rounded-xl">
        <p className="text-3xl font-bold pb-20  text-center relative z-10 leading-normal ">
          Got an Idea? Lets <br />
          <span className="bg-orange-200 px-2 ">Create it.</span>
          <p className="text-center text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quisquam!
          </p>
        </p>
        <div className="grid place-content-center    ">
          <form className="bg-white rounded-xl lg:p-12  w-full">
            <fieldset className="py-4">
              <div className="flex justify-between">
                <label htmlFor="first-name">First Name</label>
                <span className="bg-gray-300 uppercase font-bold text-sm py px-2 rounded-lg">
                  Required
                </span>
              </div>
              <input
                type="text"
                className="p-4 rounded-lg border border-gray-800 w-full my-4"
              />
            </fieldset>

            <fieldset className="py-4">
              <div className="flex justify-between">
                <label htmlFor="last-name">Last Name</label>
                <span className="bg-gray-300 uppercase font-bold text-sm py px-2 rounded-lg">
                  Required
                </span>
              </div>
              <input
                type="text"
                className="p-4 rounded-lg border border-gray-800 w-full my-4"
              />
            </fieldset>

            <fieldset className="py-4">
              <div className="flex justify-between">
                <label htmlFor="email">Email</label>
                <span className="bg-gray-300 uppercase font-bold text-sm py px-2 rounded-lg">
                  Required
                </span>
              </div>
              <input
                type="text"
                className="p-4 rounded-lg border border-gray-800 w-full my-4"
              />
            </fieldset>

            <fieldset className="py-4">
              <div className="flex justify-between space-x-4">
                <label htmlFor="description">
                  Tell us briefly about what you would like to create
                </label>
                <span className="bg-gray-300 uppercase font-bold text-sm py px-2 rounded-lg">
                  Required
                </span>
              </div>
              <textarea className="p-4 rounded-lg border border-gray-800 w-full my-4"></textarea>
            </fieldset>
            <button className="px-4 py-2 m-auto w-full text-sm font-semibold text-white bg-gray-900 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300  hover:text-white focus:text-white hover:bg-transparent hover:bg-cyan-500 focus:bg-cyan-700 focus:outline-none focus:shadow-outline">
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
