/**
 * This program produces a numberic pattern
 * symmetric about n where each half before and after
 * n is also symmetric around n-1.
 *
 * This program is sponsored by Recursion. inc.
 *
 * By:      Sam Corbett
 * Version: 1.0
 * Since:   2024/12/04
 */

import { createPrompt } from 'bun-promptx'

/**
 * This function generates the pattern from a given number
 *
 * @param number - the number from userInput
 */
function generatePattern (number: number): void {
  for (let index = 1; index <= number; index++) {
    printPattern(number, index)
  }
}

/**
 * This function prints a row with the pattern
 *
 * @param number -  the number from userInput
 * @param currentRow - the current row processed
 */
function printPattern (number: number, currentRow: number): void {
  let line = ''
  for (let index = 1; index <= currentRow; index++) {
    line += ` ${index}`
  }

  for (let counterA = 1; counterA <= number; counterA++) {
    for (let counterB = 1; counterB < counterA; counterB++) {
      line += ` ${counterB}`
    }
    line += ` ${number}`

    for (let counterB = number - 1; counterB >= 1; counterB--) {
      line += ` ${counterB}`
    }

    if (counterA < number) {
      line += '\n'
    }
  }

  console.log(line)
}

// Input
const userInputStr = createPrompt('Enter a positive integer: ')

if (userInputStr.value === null) {
  console.log('ERROR: entered null (nothing).')
} else {
  const userInputInt = parseInt(userInputStr.value)

  if (isNaN(userInputInt) || userInputInt <= 1) {
    console.log('ERROR: Not a valid input')
  } else {
    // Call Function and print the pattern
    generatePattern(userInputInt)
  }
}

console.log('\nDone.')
