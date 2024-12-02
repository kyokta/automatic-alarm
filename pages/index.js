import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Home() {
  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(now);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 p-20">
        <p className="text-8xl text-[#AB886D] font-bold">{time}</p>
        <p className="text-4xl text-[#493628] font-semibold">{date}</p>
        {/* button */}
        <div className="flex flex-col gap-6 mt-16">
          <Button text="Sirine Control" href="/manual-control" />
          <Button text="Add Schedule Alarm" href="/add-schedule" />
          <Button text="Date Schedule" type="arrow" />
          <Button text="Daily Schedule" type="arrow" />
        </div>
      </div>
    </Layout>
  );
}
