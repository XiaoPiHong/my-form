import React from "react";
import { CellComponentMap } from "./components";
import { ICellFuncProps, IMainProps } from "./types";

/** 最底层的组件 */
const BottomCellFunc = (
  cellFuncProps: ICellFuncProps,
  mainProps: IMainProps
) => {
  const {
    renderPrams: { text },
  } = cellFuncProps;

  return (
    <span onClick={mainProps?.mainClick} style={mainProps?.mainStyle}>
      {text}
    </span>
  );
};

/** CellFunc需循环处理组件(这个是一个递归组件) */
const CellFunc = (props: ICellFuncProps) => {
  const { dslConfig } = props;

  /** 最底层组件 */
  let CurrentComponent = BottomCellFunc.bind(null, props);
  let dslIndex = 0;
  while (dslIndex < dslConfig.length) {
    const i = dslIndex++;
    const Component = CellComponentMap[dslConfig[i].component];
    // 避免匹配不到.
    if (!Component) continue;

    // 处理完后将结果丢给下一个组件
    CurrentComponent = Component.Comp.bind(null, CurrentComponent, {
      curComponentProps: dslConfig[i].componentProps || {},
      cellFuncProps: props,
    });
  }

  return <CurrentComponent />;
};

export default CellFunc;
