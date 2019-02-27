# LIST

我的第一篇文章，一个不错的开始，加油！

## 首先熟悉Markdown的语法

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

你也可以自定义块中的标题

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

### 代码块中的语法高亮

VuePress 使用了 Prism 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

### 行号

你可以通过配置来为每个代码块显示行号：

```
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```
