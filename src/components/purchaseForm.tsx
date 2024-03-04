import { useState } from "react";
import { motion } from "framer-motion";
import { useAlert, useError, useForm, useCart } from "@/hooks";
import Loading from "./loading";
import PurchaseFormInput from "./purchaseFormInput";
import PurchaseFormStep from "./purchaseFormStep";
import { PurchaseFormItems } from "@/items/purchaseFormItems";
import axios from "axios";

export default function PurchaseForm() {
  const { cart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { form, setForm, updateField } = useForm();
  const { error, setError} = useError();

  const { dispatchAlert, setStatus } = useAlert();

  const initialError = PurchaseFormItems.reduce(
    (acc, item) => ({ ...acc, [item.name]: "" }),
    { formStatus: "" }
  );

  const initialForm = PurchaseFormItems.reduce(
    (acc, item) => ({ ...acc, [item.name]: "" }),{}
  );

  function subtotal() {
    let current = 0;
    cart.map((item) => (current += item.price * item.quantity));
    return current;
}

  const stepBack = () => {
    setError(initialError);
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
    setStep(5);
    setLoading(true);
    setError(initialError);
    if (subtotal() === 0) {
      const updatedErorr = { ...initialError, formStatus: "Your cart is empty" };
      setError(updatedErorr);
      setLoading(false);
      return;
    }
    try {
      // artificial delay
      let [res] = await Promise.allSettled([
        axios.post("/api/order", form),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
  
      if (res.status === 'rejected') {
        throw res.reason
      }
      dispatchAlert(`Form sent successfully`);
      setForm(initialForm);
      setStep(1);

    } catch (error) {
      try {
         // If Error is from server
        const response = (error as any).response;
        const updatedErorr = { ...initialError, formStatus: response.data.message};
        setError(updatedErorr);
      } catch (error) {
         // If Error is not from server
        const updatedErorr = { ...initialError, formStatus: "Something went wrong" };
        setError(updatedErorr);
      }
    }
    setStatus(true);
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
      <div className="flex flex-col justify-start gap-8 px-8 space-y-2">
        {PurchaseFormItems.map(({step: itemStep, name, label, type, placeholder}) => (
          itemStep === step && (
            <motion.label  
              key={name} 
              htmlFor={name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium flex flex-col gap-2"
            >
                {label}
              <PurchaseFormInput
                type={type}
                key={name}
                error={error[name as keyof typeof error]}
                name={name}
                value={form[name as keyof typeof form]}
                placeholder={placeholder}
                onChange={updateField}
              />
            </motion.label>
          )
        )
        )}
        {step >= 5  ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col w-full gap-1"
            >
              <p className="pt-4 my-1 font-medium">Subtotal: {subtotal()}$</p>
              {Object.keys(form).map((key) => (
                  PurchaseFormItems.map((item) => (
                    item.name === key && (
                      <p key={key}>{item.label}: {form[key as keyof typeof form]}</p>
                    )
                  ))
              ))}
            </motion.div>
          </>
        ) : null}
      </div>
      <div className="px-8 pb-8">
        <div className="text-red-500 text-sm h-16 w-full shrink-0 flex pt-8">
          {Object.keys(error).map((key) => (
            <span key={key}>
              {error[key as keyof typeof error]}
            </span>
          ))}
        </div>
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
           <motion.button
              type={step >= 5 ? "submit" : "button"}
              onClick={step >= 5 ?  () => setStep(6) : stepContinue}
              className="bg duration-350 flex items-center justify-center rounded-full bg-primary py-1.5 px-3.5 w-auto font-medium tracking-tight text-white hover:bg-primaryHover active:bg-primaryActive transition-all"
            >
              {step >= 5 ? (loading ? <Loading /> : "Order Now") : "Continue"}
            </motion.button>
        </div>
      </div>
    </form>
  );
}