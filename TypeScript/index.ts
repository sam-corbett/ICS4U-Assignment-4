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
function generatePattern (numberParam: number): void {
  let pattern = ''
  for (let index = 1; index <= numberParam; index++) {
    pattern += ` ${index}`
    for (let j = index - 1; j >= 1; j--) {
      pattern += ` ${j}`
    }
  }
  console.log(pattern.trim())
}

// Input
const userInputStr = createPrompt('Enter a positive integer: ')

if (userInputStr.value === null) {
  console.log('ERROR: entered null (nothing).')
} else {
  const userInputInt = parseInt(userInputStr.value)

  if (isNaN(userInputInt) || userInputInt <= 0) {
    console.log('ERROR: Not a valid input')
  } else {
    // Call Function and print the pattern
    generatePattern(userInputInt)
  }
}

console.log('\nDone.')
