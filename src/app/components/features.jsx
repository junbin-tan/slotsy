import React from "react";

const features = () => {
  return (
    <div className="mt-24 rounded-4xl bg-slate-100 py-24">
      <div className="p-10 mx-20 flex flex-col items-center">
        <div className="max-w-2xl">
          <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-4xl text-orange-500">
            Features
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-10">
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
          <p className="font-display text-2xl font-semibold text-teal-700">
              Interactive dashboard
            </p>
            <p className="mt-4 text-base text-neutral-600">
              {" "}
              For service providers, our website provides an array of visually informative graphs and charts that offer a comprehensive understanding of their sales performance. The interactive dashboard delivers these insights and trends in a concise manner, enabling effortless monitoring of sales activities.

            </p>
          </article>
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
          <p className="font-display text-2xl font-semibold text-teal-700">
              Booking management
            </p>
            <p className="mt-4 text-base text-neutral-600">
              {" "}
              For the convenience of both service providers and customers, our website offers seamless booking management and effortless tracking of appointment statuses.
            </p>
          </article>
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
          <p className="font-display text-2xl font-semibold text-teal-700">
              Feedback system
            </p>
            <p className="mt-4 text-base text-neutral-600">
              {" "}
              Implementing a refined feedback system, our website facilitates valuable user insights. This platform encourages constructive dialogues between service providers and customers through reviews, ratings, and comments. This dynamic interaction fosters ongoing service improvements and cultivates a community committed to excellence.
            </p>
          </article>
        </div>
        <div className="mt-10 w-full h-full flex justify-center gap-6">
          <p className="font-display text-2xl font-semibold text-teal-700">
              Client Interface
            </p>
          {/* <iframe src="https://www.youtube.com/embed/mCqyXyz_HOk" title="Slotsy Demo Video"  allowfullscreen></iframe>
           */}
           <iframe width="100%" height="500" src="https://www.youtube.com/embed/mCqyXyz_HOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="mt-10 w-full h-full flex justify-center gap-6">
          <p className="font-display text-2xl font-semibold text-teal-700">
              Admin Dashbod
            </p>
          {/* <iframe src="https://www.youtube.com/embed/rw4SsxPh7zQ" title="Slotsy Demo Video"  allowfullscreen></iframe>
           */}
           <iframe width="100%" height="500" src="https://www.youtube.com/embed/rw4SsxPh7zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>      
    </div>
  );
};

export default features;
