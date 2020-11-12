export const command = "date '+%H:%M'"

export const refreshFrequency = 5000 // ms

export const render = ({ output }) => <h1>{output}</h1>

export const className = `
    right: 32px;
    top: 2px;
    color: #fff;
    font-size: 8px;
    font-family: "Fira Code Light";
    line-height: 10px;
  `
