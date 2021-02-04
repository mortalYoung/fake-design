---
nav:
  title: 组件
  path: /components
---

# Button 按钮

按钮用于开始一个即时操作。

## TODO List

1. `fadeEffect` 的样式还没加
2. `loading` 状态宽度平滑增加怎么做
3. 怎样更好的处理 `size` `danger` 等各个属性之间的关系
4. `href` 和 `target` 没有实现 🤮

## 代码演示

```tsx
/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" style={{ margin: 5 }}>
      Primary Button
    </Button>
    <Button style={{ margin: 5 }}>Default Button</Button>
    <Button type="dashed" style={{ margin: 5 }}>
      Dashed Button
    </Button>
    <br />
    <Button type="text" style={{ margin: 5 }}>
      Text Button
    </Button>
    <Button type="link" style={{ margin: 5 }}>
      Link Button
    </Button>
  </>
);
```

```tsx
/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 */
import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" size="large" style={{ margin: 5 }}>
      Primary Button
    </Button>
    <Button style={{ margin: 5 }}>Default Button</Button>
    <Button type="dashed" size="small" style={{ margin: 5 }}>
      Dashed Button
    </Button>
    <br />
    <Button
      style={{ margin: 5 }}
      shape="circle"
      size="large"
      type="primary"
      icon={<PoweroffOutlined />}
    />
    <Button style={{ margin: 5 }} shape="circle" icon={<PoweroffOutlined />} />
    <Button
      style={{ margin: 5 }}
      size="small"
      shape="circle"
      type="dashed"
      icon={<PoweroffOutlined />}
    />
    <br />
    <Button type="primary" shape="round" size="large" style={{ margin: 5 }}>
      Primary Button
    </Button>
    <Button shape="round" style={{ margin: 5 }}>
      Default Button
    </Button>
    <Button shape="round" type="dashed" size="small" style={{ margin: 5 }}>
      Dashed Button
    </Button>
  </>
);
```

```tsx
/**
 * title: 加载中状态
 * desc: 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
 */
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'fake-design';
export default () => {
  const [loadings, setLoading] = useState([]);
  const style = { margin: 5 };

  const enterLoading = index => {
    setLoading(loading => {
      const newLoadings = [...loading];
      newLoadings[index] = true;

      return newLoadings;
    });
    setTimeout(() => {
      setLoading(loading => {
        const newLoadings = [...loading];
        newLoadings[index] = false;

        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <Button style={style} type="primary" loading>
        Loading
      </Button>
      <Button style={style} type="primary" size="small" loading>
        Loading
      </Button>
      <Button
        style={style}
        type="primary"
        icon={<PoweroffOutlined />}
        loading
      />
      <br />
      <Button
        style={style}
        type="primary"
        loading={loadings[0]}
        onClick={() => enterLoading(0)}
      >
        Click me!
      </Button>
      <Button
        style={style}
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loadings[1]}
        onClick={() => enterLoading(1)}
      >
        Click me!
      </Button>
      <Button
        style={style}
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loadings[2]}
        onClick={() => enterLoading(2)}
      />
    </>
  );
};
```

```tsx
/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 * background: rgb(190, 200, 200)
 */
import React from 'react';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" style={{ margin: 5 }} ghost>
      Primary
    </Button>
    <Button style={{ margin: 5 }} ghost>
      Default
    </Button>
    <Button style={{ margin: 5 }} type="dashed" ghost>
      Dashed
    </Button>
  </>
);
```

```tsx
/**
 * title: Block 按钮
 * desc: '`block` 属性将使按钮适合其父宽度。'
 */
import React from 'react';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" style={{ margin: 5 }} block>
      Primary
    </Button>
    <Button style={{ margin: 5 }} block>
      Default
    </Button>
    <Button style={{ margin: 5 }} type="dashed" block>
      Dashed
    </Button>
    <Button style={{ margin: 5 }} type="link" block>
      Link
    </Button>
  </>
);
```

```tsx
/**
 * title: 图标按钮
 * desc: 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
 */
import React from 'react';
import { Button } from 'fake-design';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <>
    <Button
      type="primary"
      style={{ margin: 5 }}
      shape="circle"
      icon={<SearchOutlined />}
    />
    <Button style={{ margin: 5 }} type="primary" shape="circle">
      A
    </Button>
    <Button style={{ margin: 5 }} type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button style={{ margin: 5 }} shape="circle" icon={<SearchOutlined />} />
    <Button style={{ margin: 5 }} icon={<SearchOutlined />}>
      Search
    </Button>
    <br />
    <Button
      style={{ margin: 5 }}
      type="dashed"
      shape="circle"
      icon={<SearchOutlined />}
    />
    <Button style={{ margin: 5 }} type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
  </>
);
```

```tsx
/**
 * title: 不可用样式
 * desc: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */
import React from 'react';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" style={{ margin: 5 }}>
      Primary
    </Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button style={{ margin: 5 }}>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed" style={{ margin: 5 }}>
      Dashed
    </Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="text" style={{ margin: 5 }}>
      Text
    </Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <Button type="link" style={{ margin: 5 }}>
      Link
    </Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <Button danger style={{ margin: 5 }}>
      Danger Default
    </Button>
    <Button danger disabled>
      Danger Default(disabled)
    </Button>
    <br />
    <Button danger type="text" style={{ margin: 5 }}>
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Danger Text(disabled)
    </Button>
    <br />
    <Button type="link" danger style={{ margin: 5 }}>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Danger Link(disabled)
    </Button>
    <div style={{ background: 'rgb(190, 200, 200)' }}>
      <Button ghost style={{ margin: 5 }}>
        Ghost
      </Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
);
```

```tsx
/**
 * title: 危险按钮
 * desc: 在 4.0 之后，危险成为一种按钮属性而不是按钮类型。 （→ →复制粘贴工程师）
 */
import React from 'react';
import { Button } from 'fake-design';

export default () => (
  <>
    <Button type="primary" style={{ margin: 5 }} danger>
      Primary
    </Button>
    <Button danger style={{ margin: 5 }}>
      Default
    </Button>
    <Button type="dashed" danger style={{ margin: 5 }}>
      Dashed
    </Button>
    <Button type="text" danger style={{ margin: 5 }}>
      Text
    </Button>
    <Button type="link" danger style={{ margin: 5 }}>
      Link
    </Button>
  </>
);
```

> `[dumi:issues]`：`Description` 不支持 markdown 语法

<API src="../../src/Button/index.tsx"></API>
