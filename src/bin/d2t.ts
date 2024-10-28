#!/usr/bin/env node
import { convertDateToTimestamp } from '../util';

// Get the value from command line arguments
const value = process.argv[2];

// Convert the value and log the result
console.log(convertDateToTimestamp(value));
