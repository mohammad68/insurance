"use client";
import { Strings } from "@/core/contants/strings";
import FormSectionContainer from "../components/FormSectionContainer";
import Select from "@/core/uiKit/components/select";
import { ChangeEvent, useState } from "react";
import { TSelectOption } from "@/core/uiKit/components/select/types";
import StepActionButtonContainer from "../components/StepActionButtonContainer";
import { useRouter } from "next/navigation";
import { StyledInsuranceComponyLayout } from "./styles";
import { useGetInsuranceCompony } from "@/core/apis/services/carInsurance";
import { AppRoute } from "@/core/contants/routes";
import { useThridPartyStore } from "../store/useThridPartyStore";
import { motion } from "framer-motion";

const InsuranceComponyLayout = () => {
  const insuranceComponyOption = useThridPartyStore(
    (state) => state.insuranceCompony
  );

  const setInsuranceComponyStore = useThridPartyStore(
    (state) => state.setInsuranceCompony
  );

  const [selectedInsuranceComponyId, setSelectedInsuranceComponyId] = useState<
    string | undefined
  >(insuranceComponyOption?.value || "");

  const { data } = useGetInsuranceCompony();
  const router = useRouter();

  const insuranceComponyOptions: TSelectOption[] | undefined = data?.data?.map(
    (item) => ({
      label: item.title,
      value: `${item.id}`,
    })
  );

  const handleOnSelectInsuranceCompony = (selectedId: string) => {
    setSelectedInsuranceComponyId(selectedId);
    const insuraceCompony = insuranceComponyOptions?.find(
      (item) => item.value == selectedId
    );
    if (insuraceCompony) {
      setInsuranceComponyStore(insuraceCompony);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <StyledInsuranceComponyLayout>
        <FormSectionContainer
          title={Strings.third_party_insurance}
          subTitle={Strings.enter_your_previous_insurance_company}
        >
          <div className="select-container">
            <Select
              placeholder={Strings.prev_insurance_compony}
              options={insuranceComponyOptions}
              value={selectedInsuranceComponyId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const selectedId = event.currentTarget.value;
                handleOnSelectInsuranceCompony(selectedId);
              }}
            />
          </div>
          <StepActionButtonContainer
            isDisableNext={selectedInsuranceComponyId === ""}
            onPrev={() => router.back()}
            onNext={() => router.push(AppRoute.THRID_DICSOUNT)}
          />
        </FormSectionContainer>
      </StyledInsuranceComponyLayout>
    </motion.div>
  );
};

export default InsuranceComponyLayout;
