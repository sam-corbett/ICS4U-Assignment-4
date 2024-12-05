/**
 * This program produces a numeric pattern
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
 * @param numberParam - the number from userInput
 */
function generatePattern (numberParam: number): string {
  if (numberParam < 1) {
    return ''
  }
  const subPattern = generatePattern(numberParam - 1)
  let currentPattern = ` ${numberParam}`
  if (numberParam > 5) {
    currentPattern += '\n'
  }
  return subPattern + currentPattern + subPattern
}

// Input
const userInputStr = createPrompt('Enter a positive integer: ')

if (userInputStr.value === null) {
  console.log('ERROR: entered null (nothing).')
} else {
  const userInputInt = parseInt(userInputStr.value)

  if (isNaN(userInputInt) || userInputInt <= 0) {
    console.log('ERROR: Not a valid input')
  } else if (userInputInt > 15) {
    console.log('ERROR: Cannot provide a result for an input larger than 15.')
  } else {
    // Call Function and print the pattern
    console.log(generatePattern(userInputInt).trim())
  }
}

console.log('\nDone.')
