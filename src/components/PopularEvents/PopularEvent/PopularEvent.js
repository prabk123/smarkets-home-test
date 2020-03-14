import React from "react";
import { Skeleton } from "antd";

const PopularEvent = () => {
  return (
    <Skeleton
      className="menuItem-root"
      avatar={{ shape: "square" }}
      paragraph={{ rows: 1 }}
      title={{ width: "100%" }}
    />
  );
};

export default PopularEvent;
