import CheckoutStepper from "../Stepper/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Submitted to Admin",
    Component: () => <div>Step 1</div>,
  },
  {
    name: "Verified by Admin",
    Component: () => <div>Step 2</div>,
  },
  
  {
    name: "Sent to Insurance",
    Component: () => <div>Step 3</div>,
  },
  {
    name: "Insurance Approved",
    Component: () => <div>Step 4</div>,
  },
  {
    name: "Amount Disbursed",
    Component: () => <div>Step 5</div>,
  },
];


function Stepper() {
  return (
    <div className="flex justify-center flex-col items-center">
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default Stepper;