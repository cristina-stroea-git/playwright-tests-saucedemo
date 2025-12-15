// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 60 * 1000 ,
  expect: 
  {
    timeout: 5000 , // 5 seconds
  },
  reporter: 'html',
  use:{
    browserName: 'chromium',
    // browserName: 'firefox'
    headless : false

  }
  }
;

module.exports = config

