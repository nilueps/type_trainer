import "./Keyboard.css"
import React from "react"
import { KeyCode, KeyLabel, VisualKB } from "../../utils/LayoutUtil"



export default function Keyboard(props: { visualKB: VisualKB; pressed: Set<string>; active: KeyCode[]; current: KeyCode }): JSX.Element {
  // const { keyLabels } = useContext(KeyboardLayoutContext)

  function generateLabelHtml({ labels }: { labels: KeyLabel }): JSX.Element {
    let label: JSX.Element
    switch (Object.keys(labels).length) {
      case 1:
        label = <p>{labels.main}</p>
        break
      case 2:
        label = (
          <p>
            {labels.shift}
            <br />
            {labels.main}
          </p>
        )
        break
      case 3:
        label = (
          <p>
            {labels.shift}
            <br />
            {labels.main} {labels.opt}
          </p>
        )
        break
      default:
        label = <p></p>
        break
    }
    return label
  }

  return (
    <div className={"keyboard"} id="keyboard" data-testid="keyboard">
      {props.visualKB.keyboard.map((row, rowIdx) => (
        <ul key={"row-" + rowIdx} className={"keyboard-flex-row row-" + rowIdx}>
          {row.map(keyBtn => {
            // Determine style classes to apply to each btn
            const classes: string[] = ["key-btn"]

            classes.push("row-item-" + rowIdx)
            // Pressed keys
            const keyIsPressed = props.pressed.size && props.pressed.has(keyBtn.code)
            if (keyIsPressed) classes.push("pressed")
            // Active/inactive
            const keyIsActive = props.active.includes(keyBtn.code)
            if (!keyIsActive) classes.push("greyed")
            // Current
            const keyIsCurrent = props.current === keyBtn.code
            if (keyIsCurrent) classes.push("highlight")

            // Generate label html
            const labelHtml: JSX.Element = generateLabelHtml(keyBtn)

            return (
              <li id={keyBtn.code} data-testid={keyBtn.code} key={keyBtn.code} className={classes.join(" ")}>
                {labelHtml}
              </li>
            )
          })}
        </ul>
      ))}
    </div>
  )


  /* 
    let row: JSX.Element[] = []
    keyRow.forEach(keyBtnData => {
      let label: {
        __html: string
      }
      if (keyBtnData.label) {
        label = { __html: keyBtnData.label }
      } else {
        label = { __html: keyBtnData.key }
      }
      let classes = ["key-btn"]
      classes.push("row-item-" + idx)
      if (pressed.size && pressed.has(keyBtnData.code))
        classes.push("pressed")
      if (!keyBtnData.finger || props.keyZones.every(keyZone => keyZone as string !== keyBtnData.finger))
        classes.push("greyed")
      // if (keyBtnData.class) classes.push(...keyBtnData.class)
      row.push(
        <li
          id={keyBtnData.code}
          key={keyBtnData.code}
          className={classes.join(" ")}
          dangerouslySetInnerHTML={label}
        ></li>
      )
    })
    keys.push(
      <ul key={"row-" + idx} className={"keyboard-flex-row row-" + idx}>
        {row}
      </ul>
    )
  }
  return (
    <div className={"keyboard"} id="keyboard" data-testid="keyboard">
      {keys}
    </div>
    ) 
    */
}
