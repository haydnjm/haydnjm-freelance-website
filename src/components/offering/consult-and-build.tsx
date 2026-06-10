import OfferingBlock from "./offering-block";
import bulbAndGear from "@/images/icons/bulb-and-gear-white-primary.png";

const ConsultAndBuild = () => {
  return (
    <OfferingBlock
      icon={bulbAndGear}
      title="Consult+Build"
      subtitle="From idea to early-stage implementation"
      description="I work with you to shape your product vision and define what success looks like, then build the first version using an AI-native workflow that gets you to working software quickly. Whether it's an MVP, a proof of concept, or a scalable foundation, it's built deliberately—the right thing, built safely, and ready to grow with you."
      buttonText="Build your MVP"
      services={[
        "Everything from Consult",
        "MVP & proof-of-concept development",
        "Prototyping & early-stage coding",
        "Iterative development & feedback cycles",
        "Team collaboration & onboarding",
      ]}
    />
  );
};

export default ConsultAndBuild;
