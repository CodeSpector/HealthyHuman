import Image from "next/image";

const ProdCard = ({ prod, image }: { prod: string, image: string }) => {
  return (
    <div className="flex flex-col">
      <Image alt="Image" width={500} height={500} src={image} className="" />
      <h1>{prod}</h1>
    </div>
  );
}

export default ProdCard;
