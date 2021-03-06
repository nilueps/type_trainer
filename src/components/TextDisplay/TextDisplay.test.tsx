import { render, screen } from "@testing-library/react"
import React from "react"
import TextDisplay from "./TextDisplay"

// 'should render'
describe("TrainerDisplayArea", () => {
  it("renders without crashing", () => {
    render(
      <TextDisplay style={{}}>
        <div />
      </TextDisplay>,
      {}
    )
  })
  it.skip("displays a string", () => {
    render(
      <TextDisplay style={{}}>
        <p>teststring</p>
      </TextDisplay>,
      {}
    )
    expect(screen.getByRole("textbox")).toHaveValue("teststring")
  })
  it.todo("highlights the current character")
  it.todo("marks errors in red")
})
