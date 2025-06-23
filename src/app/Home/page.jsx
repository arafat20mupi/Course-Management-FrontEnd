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
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl mb-2 font-bold text-yellow-800">
                অনলাইন কোর্স
              </h1>
              <p className="mb-4">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5">
              {["class6", "class7", "class8", "class9"].map((item, index) => (
                <div
                  key={index}
                  className="w-32 h-24 flex flex-col items-center justify-center text-center rounded-2xl bg-white shadow-lg hover:shadow-xl transition duration-300"
                >
                  <p>📘</p>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-4 text-green-800 font-medium">
              এইচএসসি ২৬ ফ্রি ক্লাস বুক করুন
            </p>
          </div>
          <div className="bg-green-200 p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl mb-2 font-bold text-yellow-800">
                অনলাইন কোর্স
              </h1>
              <p className="mb-4">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5">
              {["ক্লাস ৬, ৭, ৮ ", "ক্লাস ৯, ১০ ", "HSC ২৫, ২৬", "HSC ২৭"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="w-32 h-24 flex flex-col items-center justify-center text-center rounded-2xl bg-white shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <p>📚</p>
                    <p>{item}</p>
                  </div>
                )
              )}
            </div>

            <p className="text-center mt-4 text-green-800 font-medium">
              এইচএসসি ২৬ ফ্রি ক্লাস বুক করুন
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
