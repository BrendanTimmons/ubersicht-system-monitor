"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.className = exports.render = exports.refreshFrequency = exports.command = void 0;
exports.command = '/usr/local/bin/icalBuddy -npn -nc -iep "title,datetime" -ps "| // |" -po "datetime,title" -tf "%H:%M" -li 3 eventsToday';
exports.refreshFrequency = 5000; // ms
exports.render = function (_a) {
    var output = _a.output;
    return <h1>{output}</h1>;
};
exports.className = "\n    left: 20px\n    top: 20px\n    color: #fff\n  ";
