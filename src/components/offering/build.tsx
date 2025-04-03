import OfferingBlock from "./offering-block";
import gear from "@/images/icons/gear-white.png";

export const Build = () => {
  return (
    <OfferingBlock
      icon={gear}
      title="Build"
      subtitle="Already know what you need?"
      description="Whether you're launching a new product or improving an existing one, I provide hands-on development expertise to build high-quality, scalable software that meets your business needs."
      buttonText="Level up your product"
      services={[
        "Custom software development",
        "Application development for web and mobile",
        "API Integration",
        "Code review & best practices",
        "Technical troubleshooting & problem-solving",
      ]}
    />
  );
};

export default Build;
