export type Optional<T> = { [P in keyof T]?: T[P] }

export interface ConfigInstance {
  abbrev: string[]
  decimal: number
}

export type OptionInstances = Optional<ConfigInstance>

export class Instance {
  public config: ConfigInstance = {
    abbrev: ['k', 'm', 'b', 't'],
    decimal: 2
  }

  constructor (options?: OptionInstances) {
    if (options) {
      // Merge options
      this.config = {
        ...this.config,
        ...options
      }
    }
  }

  // source: http://stackoverflow.com/a/2686098/1074592
  public simplify (num = 0) {
    let numberVar = num

    // 2 decimal places => 100, 3 => 1000, etc
    let decPlaces = this.config.decimal
    decPlaces = decPlaces != null ? decPlaces : 2
    decPlaces = Math.pow(10, decPlaces)

    // Enumerate number abbreviations
    const abbrev = this.config.abbrev

    // Go through the array backwards, so we do the largest first
    for (let i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      const size = Math.pow(10, (i + 1) * 3)

      // If the number is bigger or equal do the abbreviation
      if (size <= numberVar) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        numberVar = Math.round((numberVar * decPlaces) / size) / decPlaces

        // Handle special case where we round up to the next abbreviation
        if (numberVar === 1000 && i < abbrev.length - 1) {
          numberVar = 1
          i++
        }

        // Add the letter for the abbreviation
        (numberVar as any) += abbrev[i]

        // We are done... stop
        break
      }
    }

    return String(numberVar)
  }
}

function SimplifyNumber (num: number, config?: OptionInstances) {
  const instance = new Instance(config)

  const simplifiedNumber = instance.simplify(num)

  return simplifiedNumber
}

export default SimplifyNumber
