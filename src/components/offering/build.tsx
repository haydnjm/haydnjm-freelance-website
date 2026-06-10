import OfferingBlock from "./offering-block";
import gear from "@/images/icons/gear-white.png";

export const Build = () => {
  return (
    <OfferingBlock
      icon={gear}
      title="Build"
      subtitle="Already know what you need?"
      description="Whether you're launching a new product or improving an existing one, I bring hands-on, AI-native development to ship high-quality, scalable software fast—without cutting the corners that matter. Speed where it's safe, care where it counts."
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
