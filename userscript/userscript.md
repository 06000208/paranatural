---
permalink: /userscript/
description: A userscript which adds extra features to the paranatural site
---

# Paranatural Extras

A [userscript](https://en.wikipedia.org/wiki/Userscript) which adds extra features to the paranatural site:

- Random page button on comics and archive
- Embeds page title text into page descriptions

If you have any feature ideas, or experience issues/bugs, get in touch with 06000208#9666 in the [paranatural discord](https://discord.gg/SXp3Ph4)

## Download & Instructions

1. Get a userscript extension for your browser. These are good choices:
    - [Tampermonkey](https://www.tampermonkey.net) <a href="https://www.tampermonkey.net/"><img src="./tampermonkey.png" alt="Tampermonkey Icon" style="vertical-align: middle; height: 2em;"/></a>
    - [Violentmonkey](https://violentmonkey.github.io/) <a href="https://violentmonkey.github.io/"><img src="./violentmonkey.png" alt="Violentmonkey Icon" style="vertical-align: middle; height: 2em;"/></a>
2. If you have an extension which supports it, this button will open a page with a prompt to add the userscript:<br><br><a href="./extras.user.js"><img src="https://img.shields.io/badge/Install%20Userscript-green" alt="Install Userscript" /></a><br><br>If you don't have an extension, or if your extension doesn't support it, you'll be presented with the source code instead. In the latter case, you can select all (tip: use ctrl+a) and copy paste it into your userscript extension.

## Changelog

### 1.0.1

- Made title text code smarter, won't embed it if the title text matches the comic's title, which would already be shown
- Fix update urls and remove junk

### 1.0.0

- Initial release
- Adds a random page button to comic pages and front page
- Makes the title texts available on mobile/without hovering by adding them to the bottom of page descriptions
