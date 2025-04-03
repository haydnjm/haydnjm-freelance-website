import "@/app/globals.css";
import OfferingBlock from "./offering-block";
import bulb from "@/images/icons/bulb-white.png";

const Consult = () => {
  return (
    <OfferingBlock
      icon={bulb}
      title="Consult"
      subtitle="Get clarity on your product vision and technical strategy"
      description="I help businesses define their digital product roadmap, refine their ideas, and determine the right technologies to bring them to life. Whether you're starting fresh or optimizing an existing product, I'll guide you through the best approach to achieve your goals efficiently."
      buttonText="Expand your idea"
      services={[
        "Product roadmap definition",
        "Technology advisory",
        "Architecture & scalability planning",
        "Technical feasibility assessments",
        "Process & workflow optimisation",
      ]}
    />
  );
};

export default Consult;
