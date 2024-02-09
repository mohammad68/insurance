import { StyledFormSectionContainer } from "./styles";
import { TFormSectionContainerProps } from "./types";
const FormSectionContainer = ({
  children,
  title,
  subTitle,
}: TFormSectionContainerProps) => {
  return (
    <StyledFormSectionContainer>
      <p className="title">{title}</p>
      {subTitle && <p className="sub-title">{subTitle}</p>}
      <div className="body">{children}</div>
    </StyledFormSectionContainer>
  );
};

export default FormSectionContainer;
