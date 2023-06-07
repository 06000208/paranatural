// ==UserScript==
// @name         Paranatural Extras
// @namespace    https://github.com/06000208
// @version      1.0.1
// @description  Extra features for readers of paranatural
// @author       06000208
// @updateURL    https://paranatural.tk/userscript/extras.js
// @downloadURL  https://paranatural.tk/userscript/extras.js
// @supportURL   https://paranatural.tk/userscript
// @homepageURL  https://paranatural.tk/userscript
// @match        *://paranatural.net/*
// @match        *://www.paranatural.net/*
// @icon         data:image/png;base64,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
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    "use strict";
    // Generates custom comic buttons
    const createComicButton = function(image, href = null, title = null, topnav = null, nav = null) {
        // <a class="cc-prev" rel="prev" href="https://www.paranatural.net/comic/chapter-8-page-26"></a>
        const anchor = document.createElement("a");
        let style = `display: block; background-image: url("${image}"); background-size: contain; background-repeat: no-repeat;`;
        if (topnav) {
            style += " background-position: center; position: relative; z-index: 50; width: 31px; height: 31px; margin-left: 15px;";
        } else {
            style += " width: 51px; height: 51px;";
        }
        if (nav) {
            style += " margin-left: 168px;";
        }
        anchor.setAttribute("style", style);
        if (href) anchor.setAttribute("href", href);
        if (title) anchor.setAttribute("title", title);
        return anchor;
    };
    // This isn't wrapped in a DomContentLoaded event because of @run-at
    // https://www.tampermonkey.net/documentation.php#_run_at
    if (document.location.hostname == "paranatural.net" || document.location.hostname == "www.paranatural.net") {
        if (document.location.pathname == "/comic/archive") {
            // Add random page functionality to the archive page, used by the buttons
            const params = new URLSearchParams(document.location.search);
            if (params.has("extras") && params.get("extras") == "random") {
                const pages = Array.from(document.querySelectorAll("select[name=comic] option[value^=comic]"));
                const randomPage = pages[Math.floor(Math.random() * pages.length)];
                window.location.replace(`https://www.paranatural.net/${randomPage.getAttribute("value")}`);
            } else {
                // If not handling that, add random page button to the archive
                const textwrap = document.querySelector("#textwrap");
                const randomText = document.createElement("span");
                randomText.textContent = "Or, if you're feeling lucky, click this star...";
                textwrap.insertAdjacentElement("beforeend", randomText);
                textwrap.insertAdjacentElement("beforeend", createComicButton(
                    "https://paranatural.tk/assets/bigstarbutton.png",
                    "https://www.paranatural.net/comic/archive?extras=random",
                    "Random Page",
                    false,
                    false,
                ));
            }
        } else if (document.querySelector("#comicwrap #cc-comicbody")) {
            // Add random page buttons to comic pages
            // Top right navigation
            document.querySelector("#topnav").setAttribute("style", "width: 143px;");
            document.querySelector("#topnav > .cc-nav").setAttribute("style", "width: 143px;");
            document.querySelector("#topnav > .cc-nav .cc-navaux").insertAdjacentElement("afterend", createComicButton(
                "https://paranatural.tk/assets/starchmanstar.png",
                "https://www.paranatural.net/comic/archive?extras=random",
                "Random Page",
                true,
                false,
            ));
            // Center bottom navigation
            const next = document.querySelector("#leftside > .cc-nav .cc-next");
            if (next) next.setAttribute("style", "margin-left: 169px;");
            document.querySelector("#leftside > .cc-nav .cc-navaux").insertAdjacentElement("afterend", createComicButton(
                "https://paranatural.tk/assets/bigstarbutton.png",
                "https://www.paranatural.net/comic/archive?extras=random",
                "Random Page",
                false,
                true,
            ));
            // Embed title text in description
            const titleText = document.querySelector("#cc-comic").getAttribute("title")?.trim();
            const newsarea = document.querySelector("#newswrap .cc-newsarea");
            const comicTitle = document.querySelector("#newswrap .cc-newsarea > .cc-newsheader")?.textContent?.trim();
            // Only embed if the relevant elements exist and the title text doesn't match comic title
            if (titleText && newsarea && comicTitle && titleText !== comicTitle) {
                const header = document.createElement("h2");
                header.textContent = "Title Text";
                newsarea.insertAdjacentElement("beforeend", header);
                const titleTextParagraph = document.createElement("p");
                titleTextParagraph.textContent = titleText;
                newsarea.insertAdjacentElement("beforeend", titleTextParagraph);
            }
        }
    }
})();
