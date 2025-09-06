module.exports = {
  // TypeScript/JavaScript 파일들
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],

  // CSS 파일들 (Tailwind 포함)
  '*.{css,scss,sass}': ['prettier --write'],

  // JSON, Markdown, YAML 파일들
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // 기타 설정 파일들
  '*.{html,xml}': ['prettier --write'],
};
