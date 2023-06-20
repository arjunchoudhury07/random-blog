import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./components/ui/button";

export default function Home() {
  return (
    <div className="text-start p-5 min-h-screen flex gap-5 sm:items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight py-5">
          <span className="text-white bg-orange-400 px-3">Lorem, ipsum</span>{" "}
          dolor sit amet <span className="underline">consectetur</span>{" "}
          adipisicing elit.
          <span className="text-white bg-black px-3">
            Laboriosam nobis aut dolore laborum.
          </span>
        </h1>
        <p className="pt-10 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolor eveniet quam expedita corrupti animi praesentium placeat
          sapiente quaerat, veritatis quasi excepturi nostrum perferendis illum?
          Exercitationem mollitia in et dolores!
        </p>
        <div className="flex gap-5 mt-5">
          <Link href="/posts" className={buttonVariants()}>
            Read Now
            <ChevronRight className="-mr-2" />
          </Link>
          <Link href="#" className={buttonVariants({ variant: "outline" })}>
            Learn More
            <ChevronRight className="-mr-2" />
          </Link>
        </div>
      </div>
      <Image
        alt="image"
        src="https://img.freepik.com/free-vector/boy-student-sitting-stack-books-with-laptop-flat-icon-illustration_1284-64037.jpg?w=826&t=st=1687248119~exp=1687248719~hmac=448c77b5f6c4605dea43e9d3c3afc289f281f725a5d78e6814de2e60a42a65c0"
        height={600}
        width={600}
        className="hidden lg:block"
      />
    </div>
  );
}
