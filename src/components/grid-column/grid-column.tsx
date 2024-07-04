import { Col } from "antd";
import React, { ReactNode } from "react";

type GridColumnProps = {
  children?: ReactNode;
};

const GridColumn: React.FC<GridColumnProps> = ({ children }) => {
  return <Col span={8}>{children}</Col>;
};

export default GridColumn;
