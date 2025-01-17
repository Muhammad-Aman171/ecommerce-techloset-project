import React from "react";
import OrganizationImg1 from "../../assets/imgs/organization1.png";
import OrganizationImg2 from "../../assets/imgs/organization2.png";
import OrganizationImg3 from "../../assets/imgs/organization3.png";
import OrganizationImg4 from "../../assets/imgs/organization4.png";
import OrganizationImg5 from "../../assets/imgs/organization5.png";

const OrganizationsSection = () => {
  return (
    <div className="bg-[#E2F4FF] flex flex-wrap justify-center gap-x-[53px] gap-y-[20px] mb-[100px] py-[47.38px] px-[32.5px] max-md:w-full max-md:m-0 max-md:gap-y-12  ">
      <img src={OrganizationImg1} alt="organizationImg does not show" />
      <img src={OrganizationImg2} alt="organizationImg does not show" />
      <img src={OrganizationImg3} alt="organizationImg does not show" />
      <img src={OrganizationImg4} alt="organizationImg does not show" />
      <img src={OrganizationImg5} alt="organizationImg does not show" />
    </div>
  );
};

export default OrganizationsSection;
