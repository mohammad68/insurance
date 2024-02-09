"use client";

import { Strings } from "@/core/contants/strings";
import { StyledHeader } from "./styles";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useUserStore } from "../../user/store/UserStore";
import userIcon from "@/public/user.svg";

const Header = () => {
  const user = useUserStore((state) => state.user);
  return (
    <StyledHeader>
      <Image src={logo} alt={"insurance-logo"} />
      <p className="title">{Strings.insurance_comparison_and_purchase_title}</p>
      {user ? (
        <div className="user">
          <Image src={userIcon} alt="user" width={16} height={16} />
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
      ) : (
        <p>{Strings.register}</p>
      )}
    </StyledHeader>
  );
};

export default Header;
