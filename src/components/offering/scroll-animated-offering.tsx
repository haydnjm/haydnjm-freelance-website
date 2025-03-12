import Build from "./build";
import Consult from "./consult";
import ConsultAndBuild from "./consult-and-build";
import styles from "./scroll-testing.module.css";

const ScrollAnimatedOffering = () => {
  return (
    <div className={`h-[500vh] relative ${styles.container}`}>
      {/* Progress bar */}
      <div
        className={`h-1.5 w-full bg-background rounded-sm sticky top-[calc(20vh-3px)] left-0 flex items-center justify-between`}
      >
        <div className={`h-4 w-4 bg-background rounded-full`} />
        <div className={`h-4 w-4 bg-background rounded-full`} />
        <div className={`h-4 w-4 bg-background rounded-full`} />
        <div className={`h-4 w-4 bg-background rounded-full`} />
      </div>
      <div
        className={`h-6 w-6 -mt-4 bg-background rounded-full sticky top-[calc(20vh-12px)] left-0 ${styles.progress_indicator}`}
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
