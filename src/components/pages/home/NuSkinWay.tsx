import Image from "next/image";

function NuSkinWay() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 items-center gap-6 px-10 w-full p-4 border border-gray-400 rounded-sm">
        <div className="col-span-1 text-3xl">
          <span className="text-3xl">
            Nu Skin,<br></br> Improving Lives Everyday
          </span>
        </div>
        <div className="col-span-1 flex justify-around ">
          <div className="max-w-52">
            <span className="text-3xl font-bold">25+</span>
            <p>Years of Giving</p>
          </div>
          <div className="max-w-52">
            <a href="#" className="text-3xl font-bold">
              20+
            </a>
            <p className="underline">Current Social Projects</p>
          </div>
          <div className="max-w-52">
            <a href="#" className="text-3xl font-bold">
              850M+
            </a>
            <p className="underline">Meals Donated through Nourish the Children</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-4 w-full mt-4">
        <div className="col-span-1">
          <Image
            src={"https://media.nuskin.com/m/7bdb7e1a3fef7a1/webimage-NSWay_Force-for-Good.png"}
            priority
            width={400}
            height={400}
            alt="Nu Skin Way Force for Good"
            className="w-full h-full"
          />
        </div>
        <div className="col-span-1 bg-[##f7f7f7] shadow-sm w-full h-full p-8">
          <h4 className="text-3xl font-semibold">Being a Force for Good</h4>
          <p className="text-gray-800 mt-2">
            Some call it corporate social responsibility. We call it our purpose. Together we’re
            engaged in initiatives worldwide—nourishing thousands of hungry children, funding
            pediatric health and wellness services, or striving for a more sustainable future. And
            sometimes, we’re simply taking meaningful steps to improve our local communities.
            Whatever we do, we believe changing the world begins with a single action.
          </p>
          <a href="#" className="block mt-4 hover:text-primary hover:font-bold">
            Explore our projects
          </a>
        </div>
        <div className="col-span-1 bg-[##f7f7f7] shadow-sm w-full h-full p-8">
          <h4 className="text-3xl font-semibold">Nature + Science</h4>
          <p className="text-gray-800 mt-2">
            Capturing the best in nature to bring you the best results is our personal mission. We
            combine powerful ingredients with innovative science and technology. The result?
            World-class products that deliver real benefits. And even though we’ve spent more than
            30 years researching aging at the genetic level, Mother Nature continually inspires us
            to push the boundaries of inquiry and innovation. We bottle what’s best and bring it
            right to your door.
          </p>
          <a href="#" className="block mt-4 hover:text-primary hover:font-bold">
            Discover more
          </a>
        </div>
        <div className="col-span-1">
          <Image
            src={"https://media.nuskin.com/m/6a3ffb6d6d3dd68f/webimage-NSWay_Nature-Science.png"}
            priority
            width={400}
            height={400}
            alt="Nu Skin Way Force for Good"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NuSkinWay;
