"use client";
import { Strings } from "@/core/contants/strings";
import SelectCart from "@/core/uiKit/components/selectCart";
import insurance from "@/public/insurance.svg";
import { useEffect, useState } from "react";
import { StyledCarInsuranceSelectContainer } from "./styles";
import { TCarInsurance } from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import { AppQueryParams, AppRoute } from "@/core/contants/routes";
import FormSectionContainer from "../components/FormSectionContainer";
import { motion } from "framer-motion";

const CarInsuranceSelectLayout = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectInsurance, setSelectInsurence] = useState<
    TCarInsurance | undefined
  >();

  useEffect(() => {
    const insuranceType = searchParams.get(AppQueryParams.INSURANCE_TYPE);
    if (!insuranceType) return;
    if (insuranceType == AppQueryParams.THRID_PARTY) {
      setSelectInsurence("thridParty");
    }
  }, [searchParams]);

  const handleOnSelect = () => {
    router.push(AppRoute.VEHICLE_TYPES);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <StyledCarInsuranceSelectContainer>
        <FormSectionContainer title={Strings.select_insurance}>
          <div className="insurances">
            <SelectCart
              onClick={handleOnSelect}
              src={insurance}
              label={Strings.third_party}
              isEnable={selectInsurance === "thridParty"}
            />
            <SelectCart
              onClick={handleOnSelect}
              src={insurance}
              label={Strings.body_insurance}
              isEnable={selectInsurance === "Comprehensive"}
            />
          </div>
        </FormSectionContainer>
      </StyledCarInsuranceSelectContainer>
    </motion.div>
  );
};

export default CarInsuranceSelectLayout;
