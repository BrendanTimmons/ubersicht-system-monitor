export const command =
  '/usr/local/bin/icalBuddy -npn -nc -iep "title,datetime" -ps "| // |" -po "datetime,title" -tf "%H:%M" -li 3 eventsToday'

export const refreshFrequency = 5000 // ms

export const render = ({ output }): any => <h1>{output}</h1>

export const className = `
    left: 20px
    top: 20px
    color: #fff
  `
