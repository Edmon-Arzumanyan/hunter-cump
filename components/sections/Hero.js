import Link from "next/link";

export default function Hero({ data }) {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={data.bg && { backgroundImage: data.bg }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-green-950/50 p-4 text-center">
        <h1 className="flex flex-col items-center gap-2 text-center font-heading text-lg font-extrabold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {data.title}
          </span>
          {data.subtitle && <span>{data.subtitle}</span>}
        </h1>
        {data.descriptions.map((elem, index) => (
          <p
            key={index}
            className="w-full text-center font-content text-sm leading-loose text-white sm:w-4/5 sm:text-base md:w-9/12 lg:w-2/3 lg:text-lg xl:w-1/2 xl:text-xl"
          >
            {elem}
          </p>
        ))}
        {data.link && (
          <Link
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-extrabold text-green-700 shadow-xl transition-all duration-500 hover:bg-green-700 hover:text-white md:text-base lg:text-lg xl:text-xl"
            href={data.link.path}
          >
            {data.link.title}
          </Link>
        )}
      </div>
    </div>
  );
}
