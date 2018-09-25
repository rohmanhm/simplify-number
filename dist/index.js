"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instance {
    constructor(options) {
        this.config = {
            abbrev: ['k', 'm', 'b', 't'],
            decimal: 2
        };
        if (options) {
            // Merge options
            this.config = Object.assign({}, this.config, options);
        }
    }
    // source: http://stackoverflow.com/a/2686098/1074592
    simplify(num = 0) {
        let number = num;
        // 2 decimal places => 100, 3 => 1000, etc
        let decPlaces = this.config.decimal;
        decPlaces = decPlaces != null ? decPlaces : 2;
        decPlaces = Math.pow(10, decPlaces);
        // Enumerate number abbreviations
        const abbrev = this.config.abbrev;
        // Go through the array backwards, so we do the largest first
        for (let i = abbrev.length - 1; i >= 0; i--) {
            // Convert array index to "1000", "1000000", etc
            const size = Math.pow(10, (i + 1) * 3);
            // If the number is bigger or equal do the abbreviation
            if (size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round((number * decPlaces) / size) / decPlaces;
                // Handle special case where we round up to the next abbreviation
                if (number == 1000 && i < abbrev.length - 1) {
                    number = 1;
                    i++;
                }
                // Add the letter for the abbreviation
                number += abbrev[i];
                // We are done... stop
                break;
            }
        }
        return String(number);
    }
}
exports.Instance = Instance;
function SimplifyNumber(num, config) {
    const instance = new Instance(config);
    const simplifiedNumber = instance.simplify(num);
    return simplifiedNumber;
}
exports.default = SimplifyNumber;
//# sourceMappingURL=index.js.map