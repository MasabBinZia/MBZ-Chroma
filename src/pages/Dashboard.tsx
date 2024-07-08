import { DockDemo } from "@/components/DemoDock";
import GaugeCircle from "@/components/magicui/gauge-circle";
import PageLayout from "@/components/PageLayout";
import PastSixMonth from "@/components/PastSixMonth";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(60), 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PageLayout>
      <section className="w-full flex flex-col justify-center items-center px-10">
        <div className="grid lg:grid-cols-2 lg:gap-10 px-2">
          <div className="w-full lg:p-2 text-white">
            <div className="lg:px-2 lg:text-left text-center">
              <h1 className="text-6xl my-1">Hello Masab!</h1>
              <h1 className="text-7xl my-1">Good Morning</h1>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl">
                  You've <span className="font-bold text-red-500">3</span> salah
                  <br /> left today.
                </h1>
                <p className="text-gray-500 text-lg">
                  <span className="font-bold text-green-500">2</span> Done for
                  today
                </p>
              </div>
            </div>
            <div className="grid w-full my-5 auto-rows-[12rem] lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-1">
              <div className="lg:col-span-2 md:col-span-2 flex justify-center items-center rounded-3xl bg-[#333230] col-span-1">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl lg:text-5xl font-bold">
                    3/July/2024
                  </h1>
                  <h2 className="text-xl lg:text-2xl">
                    Dhuʻl-Hijjah 30, 1445 AH
                  </h2>
                </div>
              </div>
              <div className="col-span-1 rounded-3xl bg-[#333230] px-2 flex flex-col gap-1 items-center justify-center">
                <p className="text-xl font-bold">Today Progress</p>
                <GaugeCircle
                  className="w-32 h-32"
                  max={100}
                  min={0}
                  value={value}
                  gaugePrimaryColor="#2563eb"
                  gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                  type="percentage"
                />
              </div>
              <div className="lg:col-span-3 flex justify-center items-center md:col-span-3 rounded-3xl bg-[#333230] col-span-1">
                <article className="prose text-white text-center max-w-xs px-2 lg:max-w-sm">
                  <q className="text-xl lg:text-2xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    tempora voluptatum. Possimus?
                  </q>
                </article>
              </div>
            </div>
          </div>
          <div className="w-full grid auto-rows-[18rem] lg:mt-[53px] text-white lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#333230] p-6">
              <h1 className="text-2xl font-semibold">Next Prayer In</h1>
              <div className="flex flex-col justify-center space-y-2 text-center items-center mt-10">
                <h2 className="text-3xl font-bold">3hrs 30mins 11secs</h2>
                <p className="text-3xl font-semibold text-primary">Asr</p>
                <p className="text-xl font-semibold">Karachi,Pakistan</p>
              </div>
            </div>
            <div className="rounded-3xl bg-[#333230] flex justify-center p-6">
              <GaugeCircle
                className="w-42 h-42 "
                max={365}
                min={0}
                value={165}
                gaugePrimaryColor="#2563eb"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                type="normal"
              />
            </div>
            <div className="rounded-3xl bg-[#333230] p-6">
              <h1 className="text-2xl font-semibold">Recent Target</h1>
              <div className="my-2 flex flex-col justify-center items-center mt-10">
                <p className="text-xl font-medium">1 week</p>
                <p className="text-lg font-medium">23/02/24 - 30/02/24</p>
                <Progress value={50} className="mt-4" />
                <p className="text-lg font-bold text-center">
                  50% <br /> Completed
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-[#333230]">
              {/* <p className="glassmorphism h-10 w-10 rounded-xl flex justify-center items-center">
                <User />
              </p> */}
              <PastSixMonth />
            </div>
          </div>
        </div>
      </section>
      <DockDemo />
    </PageLayout>
  );
}
