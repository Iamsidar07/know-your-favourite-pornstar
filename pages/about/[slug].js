import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Loading from "../../components/Loading";
const About = () => {
  const [pornstar, setPornstar] = useState();
  const router = useRouter();
  const { slug } = router.query;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "papi-pornstarsapi.p.rapidapi.com",
    },
  };
  let str = slug;
  let strArray = str?.split("-");
  let id=8; 
   if (strArray!=undefined) {
     strArray[strArray?.length - 1];
  }
  useEffect(() => {
    fetch(`https://papi-pornstarsapi.p.rapidapi.com/pornstars/${id}/`, options)
      .then((response) => response.json())
      .then((response) => setPornstar(response))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      {pornstar ? (
        <div className=" dark:border-gray-700 max-w-6xl  mx-auto text-white ">
          <Link href={"/"}>
            <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </Link>
          <div className="flex items-center justify-between h-3/4 maxw max-w-6xl">
            <div className="flex flex-col w-1/2 border-r-2 border-gray-700">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <tbody>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-xl text-white font-light px-6 py-4 ">
                            Name
                          </td>
                          <td className="text-xl text-white font-light px-6 py-4 ">
                            {pornstar.name}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Age
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.age}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            DOB
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.date_of_birth}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Rank
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.rank}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Nationality
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.nationality}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm  text-white font-light px-6 py-4 ">
                            Tatoos
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.tats}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Hip
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.hip}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Waist
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.waist}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Cup size
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.cup_size}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <tbody>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-lg text-white font-light px-6 py-4 ">
                            Boobs
                          </td>
                          <td className="text-lg text-white font-light px-6 py-4 ">
                            {pornstar.boobs}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Ass
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.ass}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            bust
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.bust}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Eyes
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.eyes}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Hair
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.hair}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Height
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.height}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Piercings
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.piercings}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Weight
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.weight}
                          </td>
                        </tr>
                        <tr className="bg-transparent hover:dark:bg-gray-800  transition duration-300 ease-in-out ">
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            Raw measurement
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 ">
                            {pornstar.raw_measurement}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl dark:bg-gray-800 inline-block p-3 mx-2 my-5">
            More {pornstar.name}&apos;s pictures
          </p>
          <div className="dark:bg-gray-800 p-3 max-w-6xl mx-auto grid  sm:grid-cols-2 md:grid-cols-3 gap-1">
            {pornstar.images.map((img, i) => {
              return (
                <div key={i}>
                  <Image
                    alt="Mountains"
                    src={img.image}
                    layout="responsive"
                    width={530}
                    height={600}
                    quality={100}
                    className="max-w-full h-auto  dark:bg-gray-700 rounded-t-sm hover:rounded-t-sm hover:scale-125 transition-all duration-100 ease-in"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
