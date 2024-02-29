/** 这个是react-form表单项目启动入口文件 */
import React from "react";
import ReactForm from "./form";
import { IFormPorps } from "./types";
import ReactDOM from "react-dom/client";

const ReactApp: React.FC = () => {
  const items: IFormPorps["items"] = [
    // {
    //   name: "test",
    //   label: "测试",
    //   component: "Input",
    //   ifShow: ({ model }) => {
    //     console.log("ifShow", model);
    //     return true;
    //   },
    //   show: ({ model }) => {
    //     console.log("show", model);
    //     return true;
    //   },
    //   componentProps: {
    //     allowClear: true,
    //   },
    // },
    {
      name: "test2",
      label: "测试2",
      render: ({ model }) => <div>{model.test === "1" ? "成功" : "失败"}</div>,
      ifShow: ({ model }) => {
        console.log("ifShow", model);
        return true;
      },
      show: ({ model }) => {
        console.log("show", model);
        return true;
      },
      componentProps: {
        allowClear: true,
      },
    },
  ];
  return (
    <section>
      <ReactForm items={items}></ReactForm>
    </section>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
);
