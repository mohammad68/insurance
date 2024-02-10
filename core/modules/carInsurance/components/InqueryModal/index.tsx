import Modal from "@/core/uiKit/components/modal";
import { useThridPartyStore } from "../../store/useThridPartyStore";
import { StyledInqueryModalContainer } from "./styles";
import ValueLabelRow from "@/core/uiKit/components/valueLableRow";
import Button from "@/core/uiKit/components/button";
import { Strings } from "@/core/contants/strings";

const InqueryModal = ({ onClose }: { onClose: () => void }) => {
  const carType = useThridPartyStore((state) => state.carType);
  const carModel = useThridPartyStore((state) => state.carModel);
  const discountAccident = useThridPartyStore(
    (state) => state.discountAccident
  );
  const discountThridParty = useThridPartyStore(
    (state) => state.discountThridParty
  );
  const insuranceCompony = useThridPartyStore(
    (state) => state.insuranceCompony
  );

  return (
    <Modal isOpen={true} onClose={onClose}>
      <StyledInqueryModalContainer>
        <div>
          <ValueLabelRow
            label={Strings.prev_insurance_compony}
            value={insuranceCompony?.label}
          />
          <ValueLabelRow label={Strings.vehicle_type} value={carType?.label} />
          <ValueLabelRow
            label={Strings.vehicle_model}
            value={carModel?.label}
          />
          <ValueLabelRow
            label={Strings.accident_insurance_discount_percentage}
            value={discountAccident?.label}
          />
          <ValueLabelRow
            label={Strings.third_party_insurance_discount_percentage}
            value={discountThridParty?.label}
          />
        </div>
        <div className="btns">
          <Button label={Strings.accept} />
          <Button label={Strings.ignore} variant="outline" onClick={onClose} />
        </div>
      </StyledInqueryModalContainer>
    </Modal>
  );
};
export default InqueryModal;
