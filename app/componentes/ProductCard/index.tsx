import Image, { StaticImageData } from "next/image";


type ProductCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  width: number;
  height: number;
  alt: string;
};

export function ProductCard({
  image,
  title,
  description,
  link,
  width,
  height,
  alt,
}: ProductCardProps) {
  return (
    <li className="w-[25%] list-none rounded-md relative z-[1000] transition-all duration-300 hover:-translate-y-[3%]">
      <div className="w-full h-[300px] rounded-t-md overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>

      <div className="w-full p-4 bg-white rounded-b-md">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="my-2 text-sm text-gray-700">{description}</p>
        <button className="w-1/2 py-2 mt-2 border border-[#2B569C] bg-[#2B569C] text-[#E8DBC9] rounded-md cursor-pointer transition-colors">
          <Link href={link} className="block w-full text-center">
            Saiba mais
          </Link>
        </button>
      </div>
    </li>
  );
}
