import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
    <div className=" -mt-10 bg-white p-36 flex justify-center items-center h-[800px]">
      
      <div className="w-[1150px] h-[600px] pl-18 m-32 sm:m-4 items-center bg-[#00000040] flex rounded-bl-3xl shadow-lg p-8 relative">
       
        <div className="w-1/2 flex flex-col justify-center space-y-6 sm:w-full md:w-1/2">
          <h1 className="text-gray-600 text-sm uppercase tracking-wide">
            Welcome to Chairy
          </h1>
          <p className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Best Furniture Collection <br />
            For Your Interior.
          </p>
          <button className="bg-[#029FAE] text-white w-[200] sm:w-full md:w-[200px] mt-20 px-10 py-2 rounded-lg hover:bg-blue-600  flex items-center gap-4">
            Shop Now{" "}
            <span className="ml-2 text-xl">
              →
            </span>
          </button>
        </div>

       
        <div className="w-1/2 relative mt-10 sm:w-full md:w-1/2">
          <Image
            src="/chair.png"
            alt="Chair"
            height={50}
            width={100}
            className="w-[350px] h-[450px] object-contain mx-auto sm:w-[300px] md:w-[350px]"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-items items-center px-32 w-full sm:w-full md:w-[1321px] h-[139px] flex-wrap">
   
          <Image
            src="/card1.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card2.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card3.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card4.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card5.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card6.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <Image
            src="/card7.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          
    </div>
    <h1 className="text-4xl font-bold pl-32 mt-10 md:ml-10">Featured Product</h1>
    <div className="flex justify-center items-center ml-36 mr-36 mt-10 sm:pl-4 sm:pr-4">
          <Image
            src="/chair1.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[212px] h-[312px] object-contain mx-auto sm:w-[180px] md:w-[212px]"
          />
          <Image
            src="/chair2.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[212px] h-[312px] object-contain mx-auto sm:w-[180px] md:w-[212px]"
          />
         <Image
            src="/chair3.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[212px] h-[312px] object-contain mx-auto sm:w-[180px] md:w-[212px]"
          />
          <Image
            src="/chair4.jpg"
            alt="logo"
            height={50}
            width={100}
            className="w-[212px] h-[312px] p-42 object-contain mx-auto sm:w-[180px] md:w-[212px]"
          />
    </div>
    <h1 className="text-4xl font-bold pl-36 mt-20 sm:ml-4">Top Category</h1>
    <div className="flex flex-wrap mt-20 ml-52 gap-8 sm:pl-4 sm:pr-4 justify-center items-center sm:justify-start">
        <Image
            src="/chair5.jpg"
            alt="image"
            height={50}
            width={100}
            className="w-[312px] h-[312px] object-contain sm:w-[250px]"
          />
        <Image
            src="/chair6.jpg"
            alt="image"
            height={50}
            width={100}
            className="w-[312px] h-[312px] object-contain sm:w-[250px]"
          />
        <Image
            src="/chair7.jpg"
            alt="image"
            height={50}
            width={100}
            className="w-[312px] h-[312px] object-contain sm:w-[250px]"
          />
          </div>
          
          <div className="flex flex-col lg:flex-row px-40 justify-center sm:justify-start mt-20">
          <Image
            src="/chair3.jpg"
            alt="chair"
            height={50}
            width={100}
            className="w-[500px] h-[500] sm:w-[200px] md:w-[500px] sm:ml-0 sm:mt-0 ml-44 mt-20"
          />

          <div className="flex justify-center gap-4">
          <Image
            src="/chair4.jpg"
            alt="chair"
            height={50}
            width={100}
            className="w-[212px] h-[250] md:justify-center md:items-center sm:w-[200px] sm:h-[250px]"
          />
          <Image
            src="/chair1.jpg"
            alt="chair"
            height={50}
            width={100}
            className="w-[212px] h-[250] p-2 sm:w-[200px] sm:h-[250px]"
          />
          </div>
          </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4 -mt-96 ml-96">
          <Image
            src="/chair8.jpg"
            alt="chair"
            height={50}
            width={100}
            className="w-[212px] h-[250] sm:w-[200px] sm:h-[250px] sm:mt-40 p-2"
          />
          <Image
            src="/chair1.jpg"
            alt="chair"
            height={50}
            width={100}
            className="w-[212px] h-[250] sm:w-[200px] sm:h-[250px] sm:mt-40 p-2"
          />
        </div>
<div className="flex flex-col items-center justify-center mt-10">
  <h1 className="text-4xl font-bold m-10">Our Products</h1>
  <div className="mt-10 ml-32 mr-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 -pl-10">
    <Image
      src="/chair1.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair2.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair3.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair4.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />

    <Image
      src="/chair5.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair8.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair9.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
    <Image
      src="/chair1.jpg"
      alt="chair"
      height={50}
      width={100}
      className="w-[250px] h-[300px] ml-10 mt-5 sm:w-[180px] md:w-[250px]"
    />
  </div>
</div>
</div>
)
}

export default Hero;
