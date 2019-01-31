module.exports = {
  name: 'nataljs-website',
  rootDir: '../',
  coverageDirectory: '<rootDir>/coverage',
  setupFiles: [
    '<rootDir>/tests/test-framework-setup.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage/'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/jest.assets.js",
    "\\.(css|scss|less)$": "<rootDir>/tests/jest.assets.js"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    '/coverage/',
    "package.json",
    "package-lock.json",
    "coverage-final.json",
    "jest.assets.js",
    "test-framework-setup.js",
  ]
}
