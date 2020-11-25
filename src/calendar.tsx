// @ts-ignore
import { css } from "uebersicht"
export const command =
  '/usr/local/bin/icalBuddy -npn -nc -iep "title,datetime" -ps "| // |" -po "datetime,title" -tf "%H:%M" -li 3 -n eventsToday'

export const refreshFrequency = 5000 // ms

type Event = string;

export const render = ({ output }) => {
  // Clean up the event strings
  const events: Event[] = output.replaceAll("• ", "").split("\n")
  const filteredEvents: Event[] = events.filter((event) => event.length !== 0)

  return (
    <ol className={list}>
      {filteredEvents.map((event, i) => (
        <li className={listItem} key={i}>
          {event}
        </li>
      ))}
    </ol>
  )
}

export const className = {
  bottom: 10,
  left: 32,
  color: "#fff",
  fontSize: "12px",
  fontFamily: "Fira Code Retina",
}

const list = css`
  display: flex;
  padding: 0;
  margin: 0;
`

const listItem = css`
  display: block;
  margin: 0 30px 0 0;
`
