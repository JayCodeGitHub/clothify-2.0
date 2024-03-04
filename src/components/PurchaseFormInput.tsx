interface PurchaseFormInputProps {
  error: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

export default function PurchaseFormInput({
  error,
  name,
  value,
  placeholder,
  onChange,
  type,
}: PurchaseFormInputProps) {
  return (
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={` ${
          error
            ? "bg-red-50 border-red-500 placeholder-red-700 placeholder-opacity-40"
            : "bg-transparent border-gray-600 placeholder-slate-300"
        } w-full p-2 border-2 rounded-lg transition-all`}
        type={type ? type : "string"}
      />
  );
}