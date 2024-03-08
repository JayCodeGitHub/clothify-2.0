import CheckIcon from "./checkIcon";
import { motion } from "framer-motion";

interface StepProps {
  step: number;
  currentStep: number;
}

export default function PurchaseFormStep({ step, currentStep }: StepProps) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";
  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-[#FDD6D8] rounded-full"
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#fff", // neutral
            borderColor: "#e5e5e5", // neutral-200
            color: "#a3a3a3", // neutral-400
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#F8333C", // primary
            color: "#F8333C", // primary
          },
          complete: {
            backgroundColor: "#F8333C", // primary
            borderColor: "#F8333C", // primary
            color: "#F8333C", // primary
          },
        }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center justify-center w-10 h-10 font-semibold border-2 rounded-full"
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="w-6 h-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}