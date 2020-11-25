"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.className = exports.render = exports.refreshFrequency = exports.command = void 0;
// @ts-ignore
var uebersicht_1 = require("uebersicht");
exports.command = '/usr/local/bin/icalBuddy -npn -nc -iep "title,datetime" -ps "| // |" -po "datetime,title" -tf "%H:%M" -li 3 -n eventsToday';
exports.refreshFrequency = 5000; // ms
exports.render = function (_a) {
    var output = _a.output;
    // Clean up the event strings
    var events = output.replaceAll("• ", "").split("\n");
    var filteredEvents = events.filter(function (event) { return event.length !== 0; });
    return (<ol className={list}>
      {filteredEvents.map(function (event, i) { return (<li className={listItem} key={i}>
          {event}
        </li>); })}
    </ol>);
};
exports.className = {
    bottom: 10,
    left: 32,
    color: "#fff",
    fontSize: "12px",
    fontFamily: "Fira Code Retina",
};
var list = uebersicht_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  padding: 0;\n  margin: 0;\n"], ["\n  display: flex;\n  padding: 0;\n  margin: 0;\n"])));
var listItem = uebersicht_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  margin: 0 30px 0 0;\n"], ["\n  display: block;\n  margin: 0 30px 0 0;\n"])));
var templateObject_1, templateObject_2;
