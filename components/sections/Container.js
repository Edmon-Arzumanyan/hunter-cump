export default function Container({ data, bg }) {
  return (
    <div className={`flex w-full flex-col items-center px-6 py-6 md:px-12 xl:px-32 xl:py-28 md:py-12 gap-8 ${bg ? bg : "bg-white"}`}>
      {data}
    </div>
  );
}
