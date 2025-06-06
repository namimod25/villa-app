import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
    <Hero/>
    <div className="mt-16">
      <div className='text-center'>
        <h2 className="text-4xl font-bold uppercase">Room & Rate</h2>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laudantium?</p>
      </div>
      <Main/>
    </div>
    </div>
  );
}
