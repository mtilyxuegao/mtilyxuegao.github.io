---
name: preview-site
description: Launch a local preview of this Jekyll / GitHub Pages site (academicpages) to see content or layout changes in a browser. Use whenever asked to run, serve, preview, or screenshot the site, or to confirm an edit to _pages, _includes, _layouts, _sass, or _config.yml actually renders. Also covers the one-time Ruby setup, since macOS system Ruby cannot build this Gemfile.
---

# Preview this site locally

## The one thing that matters: use Homebrew ruby@3.3, not system Ruby

macOS system Ruby is 2.6.10 and **cannot** run this project — `bundle`
dies with `Could not find 'bundler' (2.3.25) required by your
Gemfile.lock`, and system Ruby only ships bundler 1.17.2. Do not try to
fix that by installing bundler into system Ruby; the `github-pages` gem
chain needs Ruby 3.x.

The vendored gems live in `vendor/bundle/ruby/3.3.0/`, so `ruby@3.3` is
the version that matches what is already on disk.

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
export BUNDLE_PATH=vendor/bundle
```

Both `vendor/` and `.bundle/` are gitignored, so there is no bundler
config on disk — `BUNDLE_PATH` must be set in the environment every
time, or bundler will look in the wrong place.

## Serve it

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
export BUNDLE_PATH=vendor/bundle
bundle install                       # only if `bundle exec jekyll -v` fails
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Run the serve command in the background — it does not exit. Ready when
the log contains:

```
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

Wait for it rather than sleeping a fixed amount:

```bash
until grep -qE "Server running|Address already in use|error:" <logfile>; do sleep 1; done
```

`--livereload` (LiveReload on `127.0.0.1:35729`) auto-rebuilds on edits
to `_pages/`, `_includes/`, `_sass/`, etc. Editing `_config.yml` is the
exception — Jekyll does not pick that up, so restart the server.

Harmless noise in the log, not a failure:
`To use retry middleware with Faraday v2.0+, install faraday-retry gem`

## Drive it — don't stop at "server started"

Open it for the user with `open http://127.0.0.1:4000/`, then actually
verify the change rendered. Fetching the HTML and stripping tags is
faster and more reliable than reading a screenshot for text edits:

```bash
curl -s http://127.0.0.1:4000/ -o /tmp/home.html
python3 -c "
import re, html
s = open('/tmp/home.html').read()
m = re.search(r'Hello! I am.*?</p>', s, re.S)
print(html.unescape(re.sub(r'<[^>]+>', '', m.group(0))))
m = re.search(r'<div class=\"news-feed\">(.*?)</div>', s, re.S)
for i in re.findall(r'<li>(.*?)</li>', m.group(1), re.S)[:5]:
    print(' *', html.unescape(re.sub(r'<[^>]+>', '', i)).strip())
"
```

Content lives almost entirely in `_pages/about.md` (the homepage —
intro paragraph, News feed, Research Interests, Industry Experience,
Academic Research, Education) and `_pages/cv.md`. The sidebar name,
bio, and social links come from `author` in `_config.yml`.

Other routes worth checking after a layout or SEO change:
`/cv/`, `/publications/`, and `<head>` meta from `_includes/seo.html`.

## Deploying

`main` is the GitHub Pages publish branch for `mtilyxuegao.github.io` —
pushing to `main` makes the change live at <https://jisenli.me/> (the
custom domain in `CNAME`) within a minute or two. There is no separate
deploy step, so treat a push to `main` as a publish.
