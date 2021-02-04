import React from 'react';
import classnames from 'classnames';
import { CommonProps } from '@/interface';
import './index.less';

interface DividerProps extends CommonProps {
  /**
   * @description 是否虚线
   */
  dashed: boolean;
  /**
   * @description 分割线标题的位置
   */
  orientation: 'left' | 'right' | 'center';
  /**
   * @description 文字是否显示为普通正文样式
   */
  plain: boolean;
  /**
   * @description 水平还是垂直类型
   */
  type: 'horizontal' | 'vertical';
  children: React.ReactNode;
}
const classNamePrefix = 'fake-divider';

const Divider = ({
  className,
  style,
  dashed = false,
  orientation = 'center',
  plain = false,
  type = 'horizontal',
  children,
}: Partial<DividerProps>) => {
  return (
    <div
      className={classnames(
        className,
        `${classNamePrefix}`,
        `${classNamePrefix}-${type}`,
        dashed && `${classNamePrefix}-dashed`,
        children && `${classNamePrefix}-with-text`,
        children && `${classNamePrefix}-with-text-${orientation}`,
        plain && `${classNamePrefix}-plain`,
      )}
      style={style}
      role="divider"
    >
      {children && (
        <span className={`${classNamePrefix}-inner-text`}>{children}</span>
      )}
    </div>
  );
};
export default Divider;
