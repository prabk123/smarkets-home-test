import React from "react";
import { Skeleton } from "antd";

const MenuItem = () => {
  return (
    <Skeleton
      className="menuItem-root"
      avatar
      paragraph={{ rows: 0 }}
      title={{ width: "100%" }}
    />
  );
};

export default MenuItem;
