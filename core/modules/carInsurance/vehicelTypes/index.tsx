"use client";
import { Strings } from "@/core/contants/strings";
import FormSectionContainer from "../components/FormSectionContainer";
import { StyledVehicelTypesLayout } from "./styles";
import Select from "@/core/uiKit/components/select";
import { ChangeEvent, useMemo, useState } from "react";
import { TSelectOption } from "@/core/uiKit/components/select/types";
import StepActionButtonContainer from "../components/StepActionButtonContainer";
import { useRouter } from "next/navigation";
import { AppRoute } from "@/core/contants/routes";
import { useGetVehicleTypes } from "@/core/apis/services/carInsurance";
import { useThridPartyStore } from "../store/useThridPartyStore";
import { motion } from "framer-motion";

const VehicelTypesLayout = () => {
  const { data } = useGetVehicleTypes();
  const router = useRouter();
  const setCarModal = useThridPartyStore((state) => state.setCarModal);
  const setCarType = useThridPartyStore((state) => state.setCarType);
  const carTypeOption = useThridPartyStore((state) => state.carType);
  const carModelOption = useThridPartyStore((state) => state.carModel);

  const [selectedTypeId, setSelectedTypeId] = useState<string | undefined>(
    carTypeOption?.value || ""
  );
  const [selectedModelId, setSelectedModelId] = useState<string | undefined>(
    carModelOption?.value || ""
  );

  const vehicelTypesOptions: TSelectOption[] | undefined = data?.data?.map(
    (item) => ({
      label: item.title,
      value: `${item.id}`,
    })
  );

  const vehicelModelOptions: TSelectOption[] | undefined = useMemo(() => {
    if (!selectedTypeId) return undefined;
    const itemData = data?.data.find(
      (item) => item.id == Number(selectedTypeId)
    );
    return itemData?.usages.map((item) => ({
      label: item.title,
      value: `${item.id}`,
    }));
  }, [selectedTypeId]);

  const handleOnSelectVehicelType = (selectedId: string) => {
    setSelectedTypeId(selectedId);
    const vehicelType = vehicelTypesOptions?.find(
      (item) => item.value == selectedId
    );
    if (vehicelType) {
      setCarType(vehicelType);
    }
  };

  const handleOnSelectVehicelModel = (selectedId: string) => {
    setSelectedModelId(selectedId);
    const vehicelModel = vehicelModelOptions?.find(
      (item) => item.value == selectedId
    );
    if (vehicelModel) {
      setCarModal(vehicelModel);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <StyledVehicelTypesLayout>
        <FormSectionContainer
          title={Strings.third_party_insurance}
          subTitle={Strings.select_type_and_model_of_your_car}
        >
          <div className="select-container">
            <Select
              placeholder={Strings.vehicle_type}
              options={vehicelTypesOptions}
              value={selectedTypeId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const selectedId = event.currentTarget.value;
                handleOnSelectVehicelType(selectedId);
              }}
            />
            <Select
              placeholder={Strings.vehicle_model}
              options={vehicelModelOptions}
              value={selectedModelId}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const selectedId = event.currentTarget.value;
                handleOnSelectVehicelModel(selectedId);
              }}
            />
          </div>
          <StepActionButtonContainer
            isDisableNext={selectedModelId === "" || selectedTypeId === ""}
            onNext={() => router.push(AppRoute.INSURANCE_COMPONY)}
            onPrev={() => router.back()}
          />
        </FormSectionContainer>
      </StyledVehicelTypesLayout>
    </motion.div>
  );
};

export default VehicelTypesLayout;
