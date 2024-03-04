import { motion } from "framer-motion";

interface PurchaseFormInputProps {
  error: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  number?: boolean;
}

export default function PurchaseFormInput({
  error,
  name,
  value,
  placeholder,
  onChange,
  number,
}: PurchaseFormInputProps) {
  return (
    <>
      <motion.input
        name={name}
        value={value}
        placeholder={placeholder}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        onChange={onChange}
        className={` ${
          error
            ? "bg-red-50 border-red-500 placeholder-red-700 placeholder-opacity-40"
            : "bg-transparent border-gray-600 placeholder-slate-300"
        } w-full p-2 border-2 rounded-lg transition-all`}
        type={number ? "number" : "string"}
      />
    </>
  );
}