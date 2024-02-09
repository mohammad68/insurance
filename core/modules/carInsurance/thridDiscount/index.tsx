"use client";
import { Strings } from "@/core/contants/strings";
import FormSectionContainer from "../components/FormSectionContainer";
import Select from "@/core/uiKit/components/select";
import { ChangeEvent, useState } from "react";
import { TSelectOption } from "@/core/uiKit/components/select/types";
import { StyledThridDiscountLayoutLayout } from "./styles";
import { useGetThridDiscount } from "@/core/apis/services/carInsurance";
import Button from "@/core/uiKit/components/button";
import InqueryModal from "../components/InqueryModal";
import { useThridPartyStore } from "../store/useThridPartyStore";
import { motion } from "framer-motion";

const ThridDiscountLayout = () => {
  const [showInqueryModal, setShowInqueryModal] = useState(false);

  const discountThridPartyStore = useThridPartyStore(
    (state) => state.discountThridParty
  );
  const discountAccidentStore = useThridPartyStore(
    (state) => state.discountAccident
  );
  const setDiscountThridPartyStore = useThridPartyStore(
    (state) => state.setDiscountThridParty
  );
  const setDiscountAccidentStore = useThridPartyStore(
    (state) => state.setDiscountAccident
  );

  const [selectedthridPartyId, setSelectedthridPartyId] = useState<string>(
    discountThridPartyStore?.value || ""
  );

  const [selecteAccidentInsuranceId, setSelecteAccidentInsuranceId] =
    useState<string>(discountAccidentStore?.value || "");

  const { data } = useGetThridDiscount();

  const insuranceComponyOptions: TSelectOption[] | undefined = data?.data?.map(
    (item) => ({
      label: item.title,
      value: `${item.id}`,
    })
  );

  const isSelectedDiscountOption =
    selectedthridPartyId !== "" && selecteAccidentInsuranceId !== "";

  const handleOnSelectThirdParty = (selectedId: string) => {
    setSelectedthridPartyId(selectedId);
    const thirdPartyOption = insuranceComponyOptions?.find(
      (item) => item.value == selectedId
    );
    if (thirdPartyOption) {
      setDiscountThridPartyStore(thirdPartyOption);
    }
  };

  const handleOnSelectAccidentInsurance = (selectedId: string) => {
    setSelecteAccidentInsuranceId(selectedId);
    const acceidentInsuerceOption = insuranceComponyOptions?.find(
      (item) => item.value == selectedId
    );
    if (acceidentInsuerceOption) {
      setDiscountAccidentStore(acceidentInsuerceOption);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <StyledThridDiscountLayoutLayout>
        <FormSectionContainer
          title={Strings.third_party_insurance}
          subTitle={Strings.enter_thid_party_insurance_discount_precentage}
        >
          <div className="select-container">
            <Select
              placeholder={Strings.third_party_insurance_discount_percentage}
              options={insuranceComponyOptions}
              value={selectedthridPartyId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const selectedId = event.currentTarget.value;
                handleOnSelectThirdParty(selectedId);
              }}
            />

            <Select
              placeholder={Strings.accident_insurance_discount_percentage}
              options={insuranceComponyOptions}
              value={selecteAccidentInsuranceId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const selectedId = event.currentTarget.value;
                handleOnSelectAccidentInsurance(selectedId);
              }}
            />

            <Button
              label={Strings.inquiry_price}
              type="submit"
              className="btn"
              onClick={() => {
                if (!isSelectedDiscountOption) return;
                setShowInqueryModal(true);
              }}
            />

            {showInqueryModal && (
              <InqueryModal onClose={() => setShowInqueryModal(false)} />
            )}
          </div>
        </FormSectionContainer>
      </StyledThridDiscountLayoutLayout>
    </motion.div>
  );
};

export default ThridDiscountLayout;
