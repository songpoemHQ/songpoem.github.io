source "https://rubygems.org"

# Default to development if JEKYLL_ENV is not set
env = ENV['JEKYLL_ENV'] || 'development'

if env == 'production'
  gem "jekyll", "~> 3.9"
  gem "github-pages"
  gem "jemoji", "= 0.0.10"
  gem "kramdown", "= 1.0.2"
  gem "terminal-table", "~> 1.4"
else
  gem "jekyll", "~> 4.2.2"
  gem "jekyll-remote-theme"
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-archives"
  # gem 'jekyll-include-cache'
  gem "jemoji", "~> 0.12.0"
  gem "jekyll-postcss"

end

group :jekyll_plugins do
  gem "jekyll-paginate"
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
