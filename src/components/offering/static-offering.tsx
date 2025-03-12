import Build from "./build";
import Consult from "./consult";
import ConsultAndBuild from "./consult-and-build";

const StaticOffering = () => {
  return (
    <div className="flex flex-col gap-30 text-primary-foreground">
      <Consult />
      <ConsultAndBuild />
      <Build />
    </div>
  );
};

export default StaticOffering;
