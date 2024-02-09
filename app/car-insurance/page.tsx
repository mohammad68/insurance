import CarInsuranceSelectLayout from "@/core/modules/carInsurance/selectInsurance";
import { Suspense } from "react";

export default function CarInsurancePage() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <CarInsuranceSelectLayout />
      </Suspense>
    </main>
  );
}
