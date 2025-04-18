import Image from "next/image";
import BGAuth from "@/public/bg-auth.webp";
import Link from "next/link";

export default function AuthLayout({
  title,
  children,
  question,
  link,
  linkTitle,
}) {
  return (
    <section className="w-full sm:max-w-lg lg:max-w-none mx-auto h-screen px-6 sm:px-0 lg:px-6 py-6">
      <div className="flex flex-col gap-7 lg:flex-row-reverse lg:items-center">
        <Image
          src={BGAuth}
          alt="Laptop and Book"
          loading="eager"
          priority
          className="w-full lg:w-1/2 h-[180px] lg:h-[94vh] object-cover object-center rounded-[20px]"
        />
        <div className="flex flex-col gap-7 lg:gap-9 2xl:gap-11 w-full lg:w-1/2 lg:mx-auto lg:max-w-[388px]">
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
            <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
              Welcome Back 👋
            </h2>
            <p className="lg:text-lg 2xl:text-xl">
              Today is a new day. It's your day. You shape it.{" "}
              <span className="font-semibold">{title}</span> to managing your
              internship or job applications.
            </p>
          </div>
          {children}
          <p className="text-center lg:text-lg 2xl:text-xl">
            {question} have an account?{" "}
            <span>
              <Link
                href={link}
                className="text-[#1E4AE9] hover:font-semibold transition-all duration-300 ease-in-out"
              >
                {linkTitle}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
