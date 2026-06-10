import "@/app/globals.css";
import OfferingBlock from "./offering-block";
import bulb from "@/images/icons/bulb-white.png";

const Consult = () => {
  return (
    <OfferingBlock
      icon={bulb}
      title="Consult"
      subtitle="Get clarity on what to build, and why"
      description="I help businesses define their digital product roadmap, refine their ideas, and determine the right technologies to bring them to life. AI has made it cheap to build almost anything, so the real question becomes what's actually worth building. Whether you're starting fresh or improving an existing product, I'll help you answer that before a line of code is written."
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
