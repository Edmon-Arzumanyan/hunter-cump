import Image from "next/image";

export default function ImageWithDesc({ data, bg }) {
  return (
    <div className={`${bg && bg} grid lg:grid-cols-3 items-center gap-8`}>
      <Image
        src={data.image.src}
        alt={data.image.alt}
        width={data.image.width}
        height={data.image.height}
        className={`w-full h-96 object-contain ${data.right && "lg:order-2"}`}
      />
      <div className="lg:col-span-2 flex flex-col gap-8">
        <h1 className="font-heading text-lg font-extrabold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          {data.title}
        </h1>
        <div>
          {data.descriptions.map((elem, index) => (
            <p
              key={index}
              className="font-content text-sm font-normal leading-loose text-justify text-white sm:text-base lg:text-lg xl:text-xl"
            >
              {elem}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
