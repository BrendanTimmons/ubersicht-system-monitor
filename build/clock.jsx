"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.className = exports.render = exports.refreshFrequency = exports.command = void 0;
exports.command = "date '+%H:%M'";
exports.refreshFrequency = 5000; // ms
exports.render = function (_a) {
    var output = _a.output;
    return <h1>{output}</h1>;
};
exports.className = "\n    right: 32px;\n    top: 2px;\n    color: #fff;\n    font-size: 8px;\n    font-family: \"Fira Code Light\";\n    line-height: 10px;\n  ";
