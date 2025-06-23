import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <section className="m-3 p-4">
        <div>
          <h1 className="text-4xl font-bold text-center mt-10 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
            শেখর যাত্রা শুরু এখানেই
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-green-200 p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl mb-2 font-bold text-yellow-800">
                অনলাইন কোর্স
              </h1>
              <p className="mb-2">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
            </div>

            <div className="">
              <p className="text-center mt-3 text-green-800">
                এইচএসসি ২৬ ফ্রি ক্লাস বুক করুন
              </p>
            </div>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl mb-2 font-bold text-yellow-800">
                অনলাইন কোর্স
              </h1>
              <p className="mb-2">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
              <div>
                <p>Icon</p>
                <p>class6</p>
              </div>
            </div>

            <div className="">
              <p className="text-center mt-3 text-green-800">
                এইচএসসি ২৬ ফ্রি ক্লাস বুক করুন
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
