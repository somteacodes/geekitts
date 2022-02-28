import { Button } from "../Button/Button";

export default function Hero() {
  return (
    <>
      <section
        className="bg-[#EFFDFF] rounded-xl shadow-inner shadow-[#2a929d33] bg-[length:80vmin_auto] lg:bg-[length:60vmin_auto] lg:bg-right-bottom bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url('./images/hero.png')` }}
      >
        <div className="lg:w-1/2 w-full lg:p-24 p-12 lg:pb-12 pb-48">
          <p className="text-4xl font-bold">
            Build your ideas with <br />
            <span className="bg-orange-200 px-2 pr-5 pb-2">technology.</span>
          </p>
          <p className="text-base py-6">
            Technology is meant to make things easier, so let us do that you.
            <br />
            Working with clients from different industries like Real Estate, Ecommerce, Fintech, Automotive, Marketing, with our team of engineers and specialists on UX/UI, Backend, Frontend, and DevOps scope of work
          </p>
          <Button
              onClick={() => console.log("button clicked")}
              background={"bg-gray-900 "}
              color={"text-white"}
              hover={"bg-cyan-900"}
              hoverText={""}
              extraClasses={"focus:outline-none focus:shadow-outline focus:text-white "}
            >
              Request Quote
            </Button>
        </div>
      </section>
    </>
  );
}
