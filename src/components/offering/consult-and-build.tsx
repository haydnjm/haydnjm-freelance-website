import OfferingBlock from "./offering-block";
import bulbAndGear from "@/images/icons/bulb-and-gear-white-primary.png";

const ConsultAndBuild = () => {
  return (
    <OfferingBlock
      icon={bulbAndGear}
      title="Consult+Build"
      subtitle="From idea to early-stage implementation"
      description="I work with you to shape your product vision, define technical requirements, and lay the groundwork for development. Then, I help build the initial version of your product—whether it's an MVP, a proof of concept, or a scalable foundation—ensuring it aligns with your long-term goals."
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
