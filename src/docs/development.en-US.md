## Development

> Recommended use: generating project at https://github.com/hellof2e/quark-cli

`quarkc` supports `TypeScript`. A component written in `quarkc` would look like this:

```tsx
import { QuarkElement, customElement, property } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-text", style })
class Text extends QuarkElement {
  @property() // Externally passed properties
  text = false

  render() {
    return (
      <div>{ this.text }</div>
    )
  }
}
```

External use
```html
<quark-text text="hello world"></quark-text>
```
