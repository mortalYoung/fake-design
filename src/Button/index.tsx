import React from 'react';
import classnames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import { CommonProps } from '../interface';
import './index.less';

export interface ButtonProps extends CommonProps {
  /**
   * @description 将按钮宽度调整为其父宽度的选项
   * @default false
   */
  block: boolean;
  /**
   * @description 设置危险按钮
   * @default false
   */
  danger: boolean;
  /**
   * @description 按钮失效状态
   * @default false
   */
  disabled: boolean;
  /**
   * @description 幽灵属性，使按钮背景透明
   * @default false
   */
  ghost: boolean;
  /**
   * @description 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href: string;
  /**
   * @description 设置 `button` 原生的 `type` 值，可选值请参考 (HTML 标准)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type]
   * @default button
   */
  htmlType: string;
  /**
   * @description 设置按钮的图标组件
   */
  icon: React.ReactNode;
  /**
   * @description 设置按钮载入状态
   * @default false
   */
  loading: boolean | { delay: number };
  /**
   * @description 设置按钮形状
   */
  shape: 'circle' | 'round';
  /**
   * @description 设置按钮大小
   * @default middle
   */
  size: 'large' | 'middle' | 'small';
  /**
   * @description 相当于 a 链接的 target 属性，href 存在时生效
   */
  target: string;
  /**
   * @description 设置按钮类型
   * @default `default`
   */
  type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * @description 点击按钮时的回调
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const classNamePrefix = 'fake-btn';
const Button = ({
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  href,
  htmlType = 'button',
  icon,
  loading = false,
  shape,
  size = 'middle',
  target,
  type = 'default',
  onClick,
  children,
  className,
  style,
}: Partial<ButtonProps>) => {
  const isIconOnly = () => {
    return !children && icon;
  };

  const buttonType = () => {
    switch (htmlType) {
      case 'button':
        return 'button';
      case 'reset':
        return 'reset';
      case 'submit':
        return 'submit';
      default:
        return undefined;
    }
  };

  return (
    <button
      type={buttonType()}
      style={style}
      disabled={disabled}
      className={classnames(
        classNamePrefix,
        // default 不加样式
        type !== 'default' && `${classNamePrefix}-${type}`,
        // middle 不加样式
        size !== 'middle' && `${classNamePrefix}-${size}`,
        ghost && `${classNamePrefix}-background-ghost`,
        // 判断是否只有 icon 没有文案，给特殊样式
        isIconOnly() && `${classNamePrefix}-icon-only`,
        loading && `${classNamePrefix}-loading`,
        block && `${classNamePrefix}-block`,
        shape && `${classNamePrefix}-${shape}`,
        danger && `${classNamePrefix}-dangerous`,
        className,
      )}
      onClick={onClick}
    >
      {loading ? (
        <LoadingOutlined className={`${classNamePrefix}-loading-btn`} />
      ) : (
        icon
      )}
      {/* children 用 span 包裹易于写样式 */}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
