import PageLayout from "@/components/PageLayout";

export default function Donate() {
  return (
    <PageLayout className="justify-center">
      <section className="flex lg:w-1/2 flex-col justify-center text-center lg:p-10">
        <h1 className="text-5xl font-bold text-white ">
          Support Our <span className="text-primary">Mission.</span>
        </h1>
        <p className="text-2xl text-center text-white my-5">
          Your donations are crucial in helping us maintain and improve the
          Salah Habit app, ensuring it remains free and accessible. Funds are
          primarily used to cover server costs, develop new features, and
          support community outreach programs.
        </p>
        <div className="flex flex-col justify-center items-center gap-y-5">
            <a className="w-1/4 hover:cursor-pointer">
            <img src="/stripe.svg" className="" alt="" />
            </a>
            <a className="w-1/4 hover:cursor-pointer">
            <img src="/bmc.png" className="" alt="" />
            </a>
        </div>
      </section>
    </PageLayout>
  );
}
