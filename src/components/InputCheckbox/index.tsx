import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const [checkedBox, setCheckedBox] = useState(checked)
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setCheckedBox(checked)
    onChange(checked)
  }

  // const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const isChecked = event.target.checked

  //   if (isChecked) {
  //     return checked
  //   } else {
  //     return !checked
  //   }
  // }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={handleCheckBoxChange}
      />
    </div>
  )
}
