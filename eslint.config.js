import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [
      '**/meta/*.json',
      // 不检查 md 文件
      '**/*.md',
    ],
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
)
