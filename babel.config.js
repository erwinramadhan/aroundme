module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screen': './src/screen',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
