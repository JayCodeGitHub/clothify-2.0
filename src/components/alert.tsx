import { motion } from "framer-motion";

interface AlertProps {
  message: string;
}

export default function Alert({ message }: AlertProps) {
  return (
    <motion.aside
      role="alert"
      initial={{ opacity: 0, translate: "-50% -20px" }}
      animate={{ opacity: 1, translate: "-50% 0px" }}
      transition={{
        duration: 0.2,
      }}
      className="fixed z-20 flex items-center gap-4 p-5 bg-white top-8 left-1/2 rounded-2xl w-5/6 md:w-auto shadow-3xl"
    >
      <motion.span
        className="flex items-center justify-center w-8  h-8 rounded-full bg-green-500 shrink-0"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
      </motion.span>
      <p>{message}</p>
    </motion.aside>
  );
}