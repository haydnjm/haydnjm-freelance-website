import Build from "./build";
import Consult from "./consult";
import ConsultAndBuild from "./consult-and-build";
import styles from "./scroll-testing.module.css";

const ScrollAnimatedOffering = () => {
  return (
    <div className={`h-[300vh] relative ${styles.container}`}>
      {/* Progress bar */}
      <div
        className={`w-full sticky top-[calc(20vh)] left-0 flex items-center justify-around text-lg tracking-tighter text-primary-foreground`}
      >
        <h4>Consult</h4>
        <h4>Consult+Build</h4>
        <h4>Build</h4>
      </div>
      <div
        className={`w-0 h-2 bg-background rounded-full sticky top-[calc(20vh+24px)] left-0 ${styles.progress_indicator}`}
      />
      {/* Progress indicator */}
      <div
        className={`text-primary-foreground sticky top-[25vh] md:top-[30vh] left-0 opacity-0 ${styles.item} ${styles.box_one}`}
      >
        <Consult />
      </div>
      <div
        className={`text-primary-foreground sticky top-[25vh] md:top-[30vh] left-0 opacity-0 ${styles.item} ${styles.box_two}`}
      >
        <ConsultAndBuild />
      </div>
      <div
        className={`text-primary-foreground sticky top-[25vh] md:top-[30vh] left-0 opacity-0 ${styles.item} ${styles.box_three}`}
      >
        <Build />
      </div>
    </div>
  );
};

export default ScrollAnimatedOffering;
