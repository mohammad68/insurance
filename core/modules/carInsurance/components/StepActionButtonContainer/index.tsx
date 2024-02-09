import { Strings } from "@/core/contants/strings";
import Button from "@/core/uiKit/components/button";
import ArrowRight from "@/public/arrow-right.svg";
import ArrowLeft from "@/public/arrow-left.svg";
import { StyleStepActionButtonContainer } from "./styles";

type TStepActionButtonContainerProps = {
  isDisableNext: boolean;
  onNext: () => void;
  onPrev: () => void;
};
const StepActionButtonContainer = ({
  isDisableNext,
  onNext,
  onPrev,
}: TStepActionButtonContainerProps) => {
  return (
    <StyleStepActionButtonContainer>
      <Button
        variant="outline"
        label={Strings.back}
        startIcon={ArrowRight}
        onClick={() => {
          onPrev();
        }}
      />
      <Button
        variant="outline"
        label={Strings.next_step}
        endIcon={ArrowLeft}
        onClick={() => !isDisableNext && onNext()}
      />
    </StyleStepActionButtonContainer>
  );
};

export default StepActionButtonContainer;
