"use client";

import { Button, Checkbox, Divider, Input, Row } from "antd";
import { useEffect, useState } from "react";
import GridColumn from "../grid-column/grid-column";
export type GridRowType = {
  id: string;
  name: string;
  selected: boolean;
};

export type GridDataType = {
  data: GridRowType[];
};

async function getJsonData() {
  const res = await fetch("/api/json-data");
  return res.json();
}

async function postJsonData(data: any) {
  const res = await fetch("/api/json-data", {
    method: "post",
    body: JSON.stringify(data),
  });
  return res;
}

const GridContainer = () => {
  const [gridData, setGridData] = useState<GridDataType>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getJsonData();
      setGridData(JSON.parse(response.results));
    };
    fetchData();
  }, []);

  // async function fetchData(): Promise<GridRowType[]> {
  //   const file = await promises.readFile(
  //     process.cwd() + "/data/grid_data.json",
  //     "utf8"
  //   );
  //   const data = JSON.parse(file) as GridRowType[];
  //   return data;
  // }

  const handleInputChange = (id: string, value: string) => {
    const _data = { ...gridData };
    _data.data?.forEach((row) => {
      if (row.id === id) row.name = value;
    });

    setGridData(_data as GridDataType);
  };

  const handleReset = async () => {
    const response = await getJsonData();
    setGridData(JSON.parse(response.results));
  };

  const handleSave = async () => {
    const response = await postJsonData(gridData);
    if (response.ok) {
      alert("Data Saved");
    } else {
      alert("Something went Wrong");
    }
  };

  return (
    <div className={"gridContainer"}>
      <Row>
        <GridColumn>Select</GridColumn>
        <GridColumn>ID</GridColumn>
        <GridColumn>Name</GridColumn>
      </Row>
      <Divider orientation='left'></Divider>
      {gridData?.data.map((row, rIndex) => {
        return (
          <Row key={rIndex} justify={"center"} align={"middle"} gutter={30}>
            <GridColumn>
              <Checkbox checked={row.selected} />
            </GridColumn>
            <GridColumn>{row.id}</GridColumn>
            <GridColumn>
              <Input
                value={row.name}
                onChange={(e) => handleInputChange(row.id, e.target.value)}
              />
            </GridColumn>
          </Row>
        );
      })}
      <Divider orientation='left'></Divider>
      <Row>
        <Button size='large' onClick={handleReset}>
          Reset
        </Button>
        <Button size='large' onClick={handleSave}>
          Save
        </Button>
      </Row>
    </div>
  );
};

export default GridContainer;
