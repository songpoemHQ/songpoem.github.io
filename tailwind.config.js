module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_pages/*.md',
    './_platforms/*.md',
    './_economies/*.md',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}