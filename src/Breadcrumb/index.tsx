import React from 'react';
import classnames from 'classnames';
import { CommonProps } from '@/interface';
import './index.less';

interface BreadcrumbProps {
  itemRender: any;
  params: object;
  routes: any[];
  separator: React.ReactNode;
  children: React.ReactNodeArray;
}

const classNamePrefix = 'fake-breadcrumb';

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <div className={classnames(`${classNamePrefix}`)}>{children}</div>;
};

interface BreadcrumbItemProps extends CommonProps {
  dropdownProps: any;
  href: string;
  overlay: any;
  onClick: (e: MouseEvent) => void;
  children: React.ReactNode;
}

const Item = ({ children }: BreadcrumbItemProps) => {
  return (
    <span>
      <span className={`${classNamePrefix}-link`}>{children}</span>
      <span className={`${classNamePrefix}-separator`}>/</span>
    </span>
  );
};

Breadcrumb.Item = Item;
export default Breadcrumb;
