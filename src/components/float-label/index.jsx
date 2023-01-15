import React, { useState } from "react"
import cn from "classnames"

import "./styles.scss"

const FloatLabel = ({
  children,
  label,
  value,
  forceFocused = false,
  ...restProps
}) => {
  const [focus, setFocus] = useState(false)

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { value, ...restProps })
    }
    return child
  })

  return (
    <div
      className="float-label-wrapper"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {childrenWithProps}
      <label
        className={cn("label", {
          float:
            forceFocused || focus || (value != null && value?.length !== 0),
        })}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatLabel
