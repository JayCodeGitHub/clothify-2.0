import { useState } from "react";
import { motion } from "framer-motion";
import { useAlert, useError, useMultiStepForm } from "@/hooks";
import Loading from "./loading";
import PurchaseFormInput from "./purchaseFormInput";
import PurchaseFormStep from "./purchaseFormStep";
import { PurchaseFormItems } from "@/items/purchaseFormItems";

export default function PurchaseForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { form, setForm, updateField, initialForm } = useMultiStepForm();
  const { error, setError, initialError } = useError();

  const { dispatchAlert, setStatus } = useAlert();

  const stepBack = () => {
    setStep(step < 2 ? step : step - 1);
  };

  const stepContinue = () => {

    let valid = true;

    // Filter the items that are active
    const activeItems = PurchaseFormItems.filter((item) => item.step === step);

    // Check if the active items are valid
    {activeItems.map((item) => {
      if((!form[item.name as keyof typeof form]) && valid) {
        const updatedErorr = { ...initialError, [item.name]: item.errorRequire };
        setError(updatedErorr);
        valid = false;
      } else if (valid && (item.regex && !new RegExp(item.regex).test(form[item.name as keyof typeof form]))) {
        const updatedErorr = { ...initialError, [item.name]: item.errorRegex };
        setError(updatedErorr);
        valid = false;
      }
    })}

    if (valid) {
      setStep(step > 5 ? step : step + 1);
      setError(initialError);
    }
}
     

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 5) {
      return null;
    }
    dispatchAlert(`Form sent successfully`);
    setStatus(true);
    setForm(initialForm);
    setStep(1);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl"
    >
      <div className="flex justify-between p-8 rounded">
        <PurchaseFormStep step={1} currentStep={step} />
        <PurchaseFormStep step={2} currentStep={step} />
        <PurchaseFormStep step={3} currentStep={step} />
        <PurchaseFormStep step={4} currentStep={step} />
      </div>
      <div className="flex flex-col justify-start gap-2 px-8 space-y-2 h-60">
        {PurchaseFormItems.map((item) => (
          item.step === step && (
            <PurchaseFormInput
              key={item.name}
              error={error[item.name as keyof typeof error]}
              name={item.name}
              value={form[item.name as keyof typeof form]}
              placeholder={item.placeholder}
              onChange={updateField}
            />
          )
        )
        )}
      </div>
      <div className="px-8 pb-8">
        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={stepBack}
            className={`${
              step === 1 ? "pointer-events-none opacity-50" : ""
            } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
          >
            Back
          </button>
          {step >= 5 ? (
            <motion.button
              type="submit"
              onClick={() => setStep(6)}
              className="bg duration-350 flex items-center justify-center rounded-full bg-primary py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-primaryHover active:bg-primaryActive min-w-[5rem] min-h-[2.4rem] transition-all"
            >
              {loading ? <Loading /> : "Order Now"}
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={stepContinue}
              className="bg duration-350 flex items-center justify-center rounded-full bg-primary py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-primaryHover active:bg-primaryActive transition-all"
            >
              Continue
            </motion.button>
          )}
        </div>
      </div>
    </form>
  );
}