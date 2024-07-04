import GaugeCircle from "@/components/magicui/gauge-circle";
import PageLayout from "@/components/PageLayout";
import { User } from "lucide-react";

export default function Dashboard() {
  return (
    <PageLayout>
      <section className="w-full px-10">
        <div className="grid lg:grid-cols-2 gap-10 px-2">
          <div className="w-full lg:p-2 text-white">
            <div className="lg:px-2 lg:text-left text-center">
              <h1 className="text-6xl my-1">Hello Masab!</h1>
              <h1 className="text-7xl my-1">Good Morning</h1>
              <h1 className="text-3xl">
                You've <span className="font-bold text-red-500">5</span> salah
                <br /> left today.
              </h1>
              {/* <p className="text-gray-500 text-lg"><span className="font-bold text-green-500">2</span> done for today</p> */}

              {/* <p className="text-gray-500 text-lg"><span className="font-bold text-red-500">3</span> left for today</p> */}
            </div>
            <div className="grid w-full my-5 auto-rows-[12rem] lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-1">
              <div className="lg:col-span-2 md:col-span-2 rounded-3xl bg-[#333230] col-span-1"></div>
              <div className="col-span-1 rounded-3xl bg-[#333230] px-2 flex flex-col gap-1 items-center justify-center">
                <p>Today Progress</p>
                <GaugeCircle
                  className="w-32 h-32 "
                  max={100}
                  min={0}
                  value={70}
                  gaugePrimaryColor="#2563eb"
                  gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                />
              </div>
              <div className="lg:col-span-3 md:col-span-3 rounded-3xl bg-[#333230] col-span-1"></div>
            </div>
          </div>
          <div className="w-full grid auto-rows-[18rem] mt-[53px] text-white lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#333230] p-6">
              <p className="glassmorphism h-10 w-10 rounded-xl flex justify-center items-center">
                <User />
              </p>
            </div>
            <div className="rounded-3xl bg-[#333230] p-6">
              <p className="glassmorphism h-10 w-10 rounded-xl flex justify-center items-center">
                <User />
              </p>
            </div>
            <div className="rounded-3xl bg-[#333230] p-6">
              <p className="glassmorphism h-10 w-10 rounded-xl flex justify-center items-center">
                <User />
              </p>
            </div>
            <div className="rounded-3xl bg-[#333230] p-6">
              <p className="glassmorphism h-10 w-10 rounded-xl flex justify-center items-center">
                <User />
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
