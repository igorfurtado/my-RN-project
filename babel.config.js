module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx'
        ],
        root: ['.']
      }
    ]
  ]
}
