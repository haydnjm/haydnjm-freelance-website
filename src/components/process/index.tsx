import Highlight from "@/components/ui/highlight";
import { Brain, Map, Rocket, Wrench } from "lucide-react";

const Journey = () => {
  const journeySteps = [
    {
      id: 1,
      icon: <Brain size={100} />,
      title: "Consultation",
      description: [
        <div key="consultation-1">
          <p>
            We have an open conversation about your project.{" "}
            <Highlight>
              Before we dive into solutions, we talk about problems.
            </Highlight>{" "}
            This way I can get a better understanding of your needs, and where
            my help can have the highest impact.
          </p>
        </div>,
      ],
      image: "/images/discovery.jpg",
    },
    {
      id: 2,
      title: "Technical Roadmap",
      icon: <Map size={100} />,
      description: [
        <div key="roadmap-1">
          <p>
            I define a set of potential paths forward for you. We decide
            together which is the best path for you. We set milestones and
            deliverables,
            <Highlight>
              so that there are never any nasty surprises or misaligned
              expectations.
            </Highlight>
          </p>
        </div>,
      ],
      image: "/images/research.jpg",
    },
    {
      id: 3,
      title: "Implementation",
      icon: <Wrench size={100} />,
      description: [
        <div key="implementation-1">
          <p>
            Now the building begins.{" "}
            <Highlight>
              You have full visibility into the project with regular updates and
              demos.
            </Highlight>{" "}
            No more waiting for weeks to realise that the brief was
            misinterpreted and you need to pay for more dev time to fix the
            mistakes.
          </p>
        </div>,
      ],
      image: "/images/comparison.jpg",
    },
    {
      id: 4,
      title: "Maintenance",
      icon: <Rocket size={100} />,
      description: [
        <div key="maintenance-1">
          <p>
            Everything that I build, I do so in a way that when the project is
            finished, you can hand it over to another developer and they can hit
            the ground running.
          </p>
        </div>,
        <div key="maintenance-2">
          <p>
            However, if you&apos;d like me to continue on the project I offer
            various{" "}
            <Highlight>
              support and maintenance packages tailored to your requirements.
            </Highlight>
          </p>
        </div>,
      ],
      image: "/images/purchase.jpg",
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-3xl m-auto">
        {journeySteps.map((step, index) => {
          const top = 20 + index * 3;
          return (
            <div
              key={step.id}
              className={
                "md:flex gap-8 p-6 md:p-20 mb-10 bg-accent-foreground border border-secondary rounded-lg text-background sticky shadow-[0_35px_40px_-15px_rgba(0,0,0,0.2)]"
              }
              style={{ top: `${top}vh` }}
            >
              <div className="flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">
                  {step.title}
                </h3>
                <div key={index} className="text-background space-y-4">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
