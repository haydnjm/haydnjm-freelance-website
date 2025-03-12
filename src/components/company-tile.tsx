import Image, { StaticImageData } from "next/image";

const CompanyTile = ({
  logo,
  name,
}: {
  logo: StaticImageData;
  name: string;
}) => {
  return (
    <div className="flex items-center justify-start my-6">
      <Image
        src={logo}
        alt="Company Logo"
        className="w-10 h-10 rounded-full mr-2"
      />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

export default CompanyTile;
