import React from "react";
import { ORGANNIZATION_SECTION } from "../../constant/ConstantsData.ts";
const OrganizationsSection = () => {
  return (
    <div className="bg-backgroungColor flex flex-wrap justify-center gap-x-[53px] gap-y-[20px] mb-[100px] py-[47.38px] px-[32.5px] max-md:w-full max-md:m-0 max-md:gap-y-12  ">
      {ORGANNIZATION_SECTION?.map((data, index) => (
        <div key={index}>
          <img src={data.scr} alt={data.alt} />
        </div>
      ))}
    </div>
  );
};

export default OrganizationsSection;
