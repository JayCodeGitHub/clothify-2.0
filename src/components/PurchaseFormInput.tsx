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
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`bg-transparent border-gray-600 placeholder-slate-300 ${
          error
            ? "bg-red-50 border-red-500 placeholder-red-700 placeholder-opacity-40"
            : ""
        } w-full p-2 border-2 rounded-lg transition-all`}
        type={number ? "number" : "string"}
      />
  );
}