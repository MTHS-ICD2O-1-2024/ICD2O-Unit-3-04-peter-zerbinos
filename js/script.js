// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateFahrenheitToCelsius() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  const celsius = (fahrenheit - 32) * (5 / 9)

  document.getElementById('celsius').innerHTML = fahrenheit + '°F when converted to celsius is ' + celsius.toFixed(3) + '°C'
}
