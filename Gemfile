source "https://rubygems.org"

# Using Jekyll 4.x with GitHub Actions for deployment
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme"
gem "jekyll-feed", "~> 0.17"
gem "jekyll-archives"
gem "jemoji", "~> 0.13"

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem 'jekyll-tailwindcss', '~> 0.2.0'
  gem "kramdown", "~> 2.4.0"
  gem "kramdown-parser-gfm"
  gem "terminal-table", "~> 2.0.0"

  # gem "github-pages"
  gem "jekyll-include-cache"
end

gem "webrick", "~> 1.7"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
