import{$ as n}from"./vendor.edd0a802.js";var _=`@charset "UTF-8";
/*!
 * Bootstrap Reboot v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}
body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}
hr:not([size]) {
  height: 1px;
}
h6, h5, h4, h3, h2, h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }
}
h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2 {
    font-size: 2rem;
  }
}
h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3 {
    font-size: 1.75rem;
  }
}
h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4 {
    font-size: 1.5rem;
  }
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
ol,
ul {
  padding-left: 2rem;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
dt {
  font-weight: 700;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 0.875em;
}
mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}
sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}
a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}
pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}
code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}
kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}
figure {
  margin: 0 0 1rem;
}
img,
svg {
  vertical-align: middle;
}
table {
  caption-side: bottom;
  border-collapse: collapse;
}
caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}
th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
label {
  display: inline-block;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
select {
  text-transform: none;
}
[role=button] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}
[list]::-webkit-calendar-picker-indicator {
  display: none;
}
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}
::-webkit-inner-spin-button {
  height: auto;
}
[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-color-swatch-wrapper {
  padding: 0;
}
::file-selector-button {
  font: inherit;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
iframe {
  border: 0;
}
summary {
  display: list-item;
  cursor: pointer;
}
progress {
  vertical-align: baseline;
}
[hidden] {
  display: none !important;
}
body.lb-disable-scrolling {
  overflow: hidden;
}
.lightboxOverlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: black;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  display: none;
}
.lightbox {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  line-height: 0;
  font-weight: normal;
  outline: none;
}
.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: inherit;
  max-height: none;
  border-radius: 3px;

  /* Image border */
  border: 4px solid white;
}
.lightbox a img {
  border: none;
}
.lb-outerContainer {
  position: relative;
  *zoom: 1;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 4px;

  /* Background color behind image.
     This is visible during transitions. */
  background-color: white;
}
.lb-outerContainer:after {
  content: "";
  display: table;
  clear: both;
}
.lb-loader {
  position: absolute;
  top: 43%;
  left: 0;
  height: 25%;
  width: 100%;
  text-align: center;
  line-height: 0;
}
.lb-cancel {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background: url(__VITE_ASSET__225aa88b__) no-repeat;
}
.lb-nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.lb-container > .nav {
  left: 0;
}
.lb-nav a {
  outline: none;
  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
}
.lb-prev, .lb-next {
  height: 100%;
  cursor: pointer;
  display: block;
}
.lb-nav a.lb-prev {
  width: 34%;
  left: 0;
  float: left;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAFF0lEQVR4Ac2ZW0xcVRSGPTNnhlPKcCsUAeeChkEVxhutDQwzMANaqamNWgpaH+yDIaZp1cRHbgH0gTsxkmDCI/hiRAqgD5qYRgKQ8II6TE00wfgGAcIdKeM/ydrNZIezxxg9m518gRxWmn6s9a9zhvNQJBL5T/gfjokwA5Uw0zWFeHBOugiTsAArfSWZky+iABVowAZSwRkiDSTRz1iHlJMmogATsIDTIAPYgRs8SeTTtXSQSLVKFNkivIQKksDDJFCsquqLmqZdAa/i+yCuPQ1cJHOKjdpJEWGdsIFs8BQoy83NvTEzMzO3t7f318HBweHc3Nxdj8dznWQeIWmpIryENUaiCPgdDsfN+fn5XyLcWV5eDlmt1gBqHgOpbAHIFmESySAHeECF0+m8hd/+vcgxZ3d39wBj9grqCkA6iaiyRBRunJhEpcvl+nBhYeG3iM7Z2dnZgkg1ZSgNqLI6wgebSVTZ7faPlpaW/tSTWF9f36ivr+9AbQkF3iZRhAs2dSInJ+eDUCj0h0Biq7S09BPUBkEhyAKJssKusE6QRCGoQLDfn56eDulJrK6ubgeDwS7UXgTPAztIkXUfUbhxKgLlyMRtBPtXPYm1tbXdqqoqJnEOOGhbJQCTkSJ8sJlEMNoJrFhdicPDw6PKyspe1FaD85yE2YBnLUGwSSIrK+s2bnZLehIbGxubfr+/B7WXSMJJ42QlCcVAES7YJJGdnR0dp7BgnLZKSko6qBPngIvrBEkYIKIT7PLoOKET4TjB7kbty+A8SaRxmcAxQEQn2BUI9q3Z2dl7gk7sINhRiZeoE87jMmGECB/s3JhgR8dJV2Jzc3Pb5/N1UieKKdgsEyaAY5wIk2Dj5GHBRifCgmBHb3adLBNsO3HBNkxEAWZwCmSCx4EPwb4ZJ9jbCHYXSRQDpyDYhomoNFIOUIRMvINO/KQnsbKyshMIBD5D7RVwgQWblzBahD2Sp5jN5jzM+9uLi4s/60mEw+FNbKcvUH8DVIECcAZoXLCliaRaLBbX8PBwb0RwRkZGfkftx+BdUM4+KInDbdxoWUCKoih5CQkJgYGBgS/xs6PjRPb394+ampp+RP174CIoBGcpYypQZIqYY+4dz4DLvb29Y6LONDY2fou6OuAF+SCDZCgj8kQSQDqNihfU9vX1TYlkGhoa7qDuDVBKMpQVrjMG30fYCs6gAHuRmdqurq5JkUxLS8sEaq+CMq4zJGOgCB2Fk8kHJSaTqaazs3Pi2MzQaWtrm0RtDfDFyCQyGUNFOJlEkMlkwLWenp5vRDKtra1TNGYsM5mcjKEifGeYjBfUQUaYmebm5omYzLjFC8C4zyNqTGfcNDZ1/2ABjKHudZLXkTFARJAZN/CqqnqNMqN7Ojo6vqMF4ONkVFmvFUQLQNiZ7u7u76PZAn6S4TJjrIhoAdT+iwXAdQYYKCJaAG/iPhNvAYyj7jXwAngUpAGrDBF+ATCZAuBXFOX60NDQ3TiPM1/hyfoyPf7kgNNSXyvwmSGZMk3T3hocHPwhzlPzJLLFnpZT5PztV5wZNyilbTZFmTnZrxU4GZWXATV4ap4kmeNELlEticjsSHyZq/39/V/j374P2Lk/Pj5+BznxUuDlj1acJ4B8cAH/4er29vbPR0dH58fGxubx/ac2my1Ab3iz5Yc9/gJIB05QCJ4Fz9FXD3gC5HIfi+WKCGQ0GpuzwA7yCDtdS+b/SCFfRPwaQqPxSSaS6JrlwUjR+RtEvCM0ct4sLQAAAABJRU5ErkJggg==) left 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}
.lb-nav a.lb-prev:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}
.lb-nav a.lb-next {
  width: 64%;
  right: 0;
  float: right;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAFDUlEQVR4Ac2ZS0xcVRjHvTN3hisw0GIRZ3AeLWHQWqdVsRqgA86AUmpqoy20Whd2YYhprJq45BVAF7yJkQQTluDGiEhBF5qYRsIjYYMKQxNNMO4gQHgjZfxP8pF8ufEe0qQ5pyf5BTKcWfzyff/vnHt5xLQ0wgbsQCfswEY80BWPxx8I5sUlHMBJP0nm4RfRWAUMkAqOgseII8AFDNqjPYwiGuEAySADeEEuOEkE6bNjIIX22riQchHWSo+SRACc1nU9ahjGG+ASfn8Vn+WT0BNUMV0so04kFTwJTodCoeuTk5N3dnd397a3t/8dHx+fzM7OvoG/nQPPADdwscqoF2HBPgJynE5nZGFhYTZuWlNTU3/4fL6b2FMMnmUyTpJRLqKTSAbIQyu9vrW1tRv/n4Uqzfv9/g+x7xUQAh6QxmVUV0SnKRWESMXm5uZ63GJNT0//GQgEPsHeUibD20xTLeKioBdUV1e3rKysrFrJzM3N/eP1ej/F3jImIxgAcsOeDLLAKRAtLCz8HDKWlZmdnf3b4/F8zCojGADyz5F04AUvgPJoNNq2tLS0YSUzNjY2iwHwEWXmFHCzymiqRGwgiaaXD7wIysvKytqWl5e3rGQwAO4iM7ewt4SmmYfLqLpr2U0yZ0FFaWlp597e3r6VDEbzXapMlGQEA0COiEYyTmozP8lcKC4u7lhdXV2zksGhOZeVlXWLy5gHgDwRJsMqE6A2qygoKGhBm60L2izmdruZjGkAyBShxTNzlGTOgvMYAO2iAYDKxKjNSgQDQI6IRWb8VJnXMADaUZlNK5mJiYl5DAC6AQgGgCwRWjaWGR/IB+fD4XDr2trahqDN5lEZ3mbZ5gEgW4QPAD6aK3BotmIArAsqE2MDIMTajGTkinAZ3mb5NAAS58zGIQPgJvaGwVMgk5597ECTLcJl+AB4GVyKRCJfLi4uijLzGzLzHrWYj1pMVyXCB4BBz/J5oAzcwDT7OhaLWZ4zMzMzvyNX79rt9uOUNyewqRSxsbzk0Jh9H3w2MDDwV1yw+vv7Ox0OR4C+q1REAzr1+ON0TpSDD+rq6n7d2dmxusbs9/T0fJOUlBTRNO2gIg6lGSGJYyAXFIFrtbW1P4oq0dnZOYR9F8EZdqaoCDtVgrJBEoXgck1Nzfciia6urlHsu0rSOSADJEkXYRK8EufAlYaGhtsiiba2thFk4kAij75Po1fiOcIkkplEGFQ2NTWNCBz2W1tbb9tstkrsLaDvcQlN5hWFS2SyTFxubGwcFUl0dHT8gH1VTCITJHMJWSLmYAcPMlFfXy9sJ0gkMnGNpEnCXAkJIhYSReAtBHvosGCTRBgEWSV0qc8jPNhMIgyutLS0/CSSSGRC1/Uqkg5aZUKGiDkTQVAMqtrb238+RGJUHGyZb1F4Je4/2FfFwZYr4qRb7QnwEngTwR4+5JxIZOJtcbDlv2lMAR5wBjfUi7h2fCuS6Ovru6Np2nVqvzwmQcFW9+43HeSg10twix0RSfT29v5iGMY7dMLniTOh+N8KghN7lKZTIQgKMiG/IkwkCJELFiL7uMWOYE+lWUL8elRNa51APoqGh4cTN9p7TOJed3f3d4nz5P4l1ITdDU66XK5Ic3PzF0NDQ1ODg4NT+P0rCFbQM3qu4MRWLsIfX7PB0yAEngPP089TwA8yBMFWKmJ+qZBGj7FecJzw0mfpwBBLqBexseAbIBWkESnAEPybQLnIf4JfIzSb+FymAAAAAElFTkSuQmCC) right 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}
.lb-nav a.lb-next:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}
.lb-dataContainer {
  margin: 0 auto;
  padding-top: 5px;
  *zoom: 1;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.lb-dataContainer:after {
  content: "";
  display: table;
  clear: both;
}
.lb-data {
  padding: 0 4px;
  color: #ccc;
}
.lb-data .lb-details {
  width: 85%;
  float: left;
  text-align: left;
  line-height: 1.1em;
}
.lb-data .lb-caption {
  font-size: 13px;
  font-weight: bold;
  line-height: 1em;
}
.lb-data .lb-caption a {
  color: #4ae;
}
.lb-data .lb-number {
  display: block;
  clear: left;
  padding-bottom: 1em;
  font-size: 12px;
  color: #999999;
}
.lb-data .lb-close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAPFBMVEX///8AAAD9/f2CgoKAgIAAAAAAAAAAAABLS0sAAAAAAACqqqqqqqq6urpKSkpISEgAAAC7u7u5ubn////zbsMcAAAAE3RSTlMASv6rqwAWS5YMC7/AyZWVFcrJCYaKfAAAAHhJREFUeF590kkOgCAQRFEaFVGc+/53FYmbz6JqBbyQMFSYuoQuV+iTflnstI7ssLXRvMWRaEMs84e2uVckuZe6knL0hiSPObXhj6ChzoEkIolIIpKIO4joICAIeDd7QGIfCCjOKe9HEk8mnxpIAup/F31RPZP9fAG3IAyBSJe0igAAAABJRU5ErkJggg==) top right no-repeat;
  text-align: right;
  outline: none;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
}
.lb-data .lb-close:hover {
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}
/*
*
* Index
*
* 01. common
* 02. content-wrap
* 03. loading
* 04. header
* 05. top
* 06. about
* 07. gallery
* 08. goods & books
* 09. history
* 10. contact
* 11. footer
* 00. \u672A\u6574\u9813
*******************************************/
/*
*   common
*******************************************/
:root {
  font-size: 16px;
}
html,
body {
  letter-spacing: 1.5px;
  font-family: "Times New Roman", "\u6E38\u660E\u671D", YuMincho, "\u30D2\u30E9\u30AE\u30CE\u660E\u671D Pr6 W6", "Hiragino Mincho Pro", "HGS\u660E\u671DE", "\u30E1\u30A4\u30EA\u30AA", "\uFF2D\uFF33 \uFF30\u660E\u671D", "MS PMincho", Meiryo, serif;
  margin: 0;
  padding: 0;
  color: #2d2d2de5;
}
h2 {
  margin: 0;
  letter-spacing: 5px;
  font-weight: 100;
}
ul {
  list-style: none;
}
a {
  color: #ffffffe5;
  transition: 0.4s;
}
a:hover,
a:focus {
  color: #2d2d2de5;
  text-decoration: none;
}
dd {
  margin: 0;
}
input:focus,
textarea:focus {
  box-shadow: 0 0 1px 0 #2d2d2de5;
  outline: 0;
}
button {
  cursor: pointer;
}
button:focus {
  outline: 0;
}
/*
*   content-wrap
*******************************************/
section {
  padding: 35px 0 100px;
  background-color: white;
  position: relative;
}
.wrap_title {
  text-align: center;
  margin: 40px 0 60px;
  font-size: 43px;
}
.content_wrap {
  max-width: 895px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}
.popup_wrap {
  max-width: 700px;
  width: 90vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: 0.5rem;
}
.modal_wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: none;
}
.modal_wrap > .content_wrap,
.modal_wrap > .popup_wrap {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
.popup_wrap > h3 {
  padding-top: 40px;
  margin-bottom: 25px;
}
.random_text {
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(0.8rem);
  display: inline-block;
}
.random_text.on {
  opacity: 1;
  transform: translateY(0);
}
.fade_in_block {
  transition: all 0.7s;
  opacity: 0;
  transform: translateY(2rem);
}
.fade_in_block.on {
  opacity: 1;
  transform: translateY(0);
}
/*
*   loading
*******************************************/
.loading_window {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
}
.loading_window::before {
  content: "";
  background: #fff;
  position: absolute;
  left: 0;
  right: 100%;
  top: 0;
  bottom: calc(50% - 1px);
  transition: 0.75s;
}
.loading_window::after {
  content: "";
  background: #fff;
  position: absolute;
  left: 100%;
  right: 0;
  top: calc(50% - 1px);
  bottom: 0;
  transition: 0.75s;
}
.loading_window.on::before {
  content: "";
  right: 0;
}
.loading_window.on::after {
  content: "";
  left: 0;
}
#loader {
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: #464646;
  z-index: 201;
}
#bar_area {
  position: absolute;
  left: 50%;
  top: calc(50% + 1.5rem);
  transform: translate(-50%, -50%);
  margin-top: 2.4rem;
}
#bar {
  width: 100vw;
  height: 17px;
  padding: 1px;
  font-size: 1px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
#bar span {
  display: block;
  width: 0px;
  height: 1px;
  background: #ff4261;
}
/*
*   header
*******************************************/
header > .modal_wrap::before {
  content: "";
  background: #ff8398;
  position: absolute;
  left: 0;
  right: 100%;
  top: 0;
  bottom: calc(50% - 1px);
  transition: 0.75s;
}
header > .modal_wrap::after {
  content: "";
  background: #ff8398;
  position: absolute;
  left: 100%;
  right: 0;
  top: calc(50% - 1px);
  bottom: 0;
  transition: 0.75s;
}
header > .modal_wrap.on::before {
  content: "";
  right: 0;
}
header > .modal_wrap.on::after {
  content: "";
  left: 0;
}
#menu_wrap {
  position: fixed;
  z-index: 101;
  width: 100%;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  text-align: right;
}
#menu,
#menu span {
  display: inline-block;
  transition: all 0.75s;
  box-sizing: border-box;
}
#menu {
  position: relative;
  width: 33px;
  height: 30px;
  cursor: pointer;
}
#menu span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #464646e5;
}
#menu.on span {
  background-color: #ffffffe5;
}
#menu span:nth-of-type(1) {
  top: 0;
}
#menu span:nth-of-type(2) {
  top: 14px;
}
#menu span:nth-of-type(3) {
  bottom: 0;
}
#menu.off span:nth-of-type(1) {
  -webkit-animation: menu-bar01 0.75s forwards;
  animation: menu-bar01 0.75s forwards;
}
@keyframes menu-bar01 {
  0% {
    transform: translateY(14px) rotate(45deg);
  }
  50% {
    transform: translateY(14px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#menu.off span:nth-of-type(2) {
  transition: all 0.25s 0.25s;
  opacity: 1;
}
#menu.off span:nth-of-type(3) {
  animation: menu-bar02 0.75s forwards;
}
@keyframes menu-bar02 {
  0% {
    transform: translateY(-14px) rotate(-45deg);
  }
  50% {
    transform: translateY(-14px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#menu.on span:nth-of-type(1) {
  animation: active-menu-bar01 0.75s forwards;
}
@keyframes active-menu-bar01 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(14px) rotate(0);
  }
  100% {
    transform: translateY(14px) rotate(45deg);
  }
}
#menu.on span:nth-of-type(2) {
  opacity: 0;
}
#menu.on span:nth-of-type(3) {
  animation: active-menu-bar03 0.75s forwards;
}
@keyframes active-menu-bar03 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-14px) rotate(0);
  }
  100% {
    transform: translateY(-14px) rotate(-45deg);
  }
}
#main_menu {
  display: none;
}
.menuLogo {
  width: 85px;
}
#main_menu nav dt {
  font-size: 2.7rem;
  color: #ffffffe5;
  margin: 1.5rem auto 1.8rem;
  letter-spacing: 0.5rem;
  font-weight: normal;
}
#main_menu nav ul {
  margin: 0;
  padding: 0;
}
#main_menu nav a {
  padding: 10px 0;
  margin: 0.1rem 0;
  max-width: 380px;
  width: 100%;
  display: inline-block;
  backface-visibility: hidden;
  text-decoration: none;
}
#main_menu nav a > ul {
  display: flex;
  justify-content: space-between;
}
#main_menu nav a > ul > li:nth-of-type(1) {
  font-size: 1.5rem;
  line-height: 1rem;
  height: 1.5rem;
  letter-spacing: 4px;
  position: relative;
  margin-left: 25px;
}
#main_menu nav a > ul > li:nth-of-type(1)::before {
  content: "\uFF0A";
  height: 16px;
  width: 16px;
  font-size: 2rem;
  position: absolute;
  top: 2px;
  right: calc(100% + 16px);
  -webkit-transition: transform 0.7s;
  transition: transform 0.7s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotate(0deg);
  transform-origin: 100% 42%;
}
#main_menu nav a:hover > ul > li:nth-of-type(1)::before {
  content: "\uFF0A";
  transform: rotate(-180deg);
}
#main_menu nav a > ul > li:nth-of-type(2) {
  flex-grow: 1;
  position: relative;
}
#main_menu nav a > ul > li:nth-of-type(2)::before {
  content: "";
  border-top: 1px solid;
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  transform: translateY(-50%);
  opacity: 0.5;
}
#main_menu nav a > ul > li:nth-of-type(3) {
  line-height: 1.5rem;
  height: 1.5rem;
}
.menu_button {
  color: #ffffffe5;
  font-size: 0.8rem;
  letter-spacing: 0.12rem;
}
/*
*   top
*******************************************/
#hero {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAxLTA3VDAwOjIzOjQ2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTA3VDAwOjIzOjQ2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMS0wN1QwMDoyMzo0NiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMDNlNGQ5Ny00ODMzLTM2NDktYTlmNS0yMjcxNDBlN2FkOGYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNWE0NGM1Ny0yN2FmLWU4NGUtYTRhOS1lMDVjMzYxMWFlOGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NTgzMDM5My01NTVmLWZhNDEtODVhOS05YTk4ZmRjYmZmMzQiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1ODMwMzkzLTU1NWYtZmE0MS04NWE5LTlhOThmZGNiZmYzNCIgc3RFdnQ6d2hlbj0iMjAxOS0wMS0wN1QwMDoyMzo0NiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDNlNGQ5Ny00ODMzLTM2NDktYTlmNS0yMjcxNDBlN2FkOGYiIHN0RXZ0OndoZW49IjIwMTktMDEtMDdUMDA6MjM6NDYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dmpTYAAAAfElEQVRIibXT0QrAIAgFUL95exjs5+9eNghpddVrEKk9HKQ0ACdi6wZg7P6CNmRMWhBfkCOzohT5u5Ahq/YkyO6Rygjz1UoIOzBphJ7ILBIBUogBuDoRe882xIa4BTGXyxEPyJEZkEGOKCBDVoAE2QFlhAFKCAukkQiQQh54mNavdWvGTAAAAABJRU5ErkJggg==");
  position: relative;
  background-position-x: 40%;
  height: 100vh;
}
.top_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.top_img {
  background: url("__VITE_ASSET__c2854daa__") no-repeat center/cover;
  background-position-x: 40%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.7;
  z-index: -1;
}
/*
*   about
*******************************************/
#about .wrap_title {
  margin-bottom: 60px;
}
.profile_name {
  color: #ff4261;
  font-size: 28px;
  font-weight: 600;
}
.profile_detail {
  max-width: 560px;
  margin: 0 auto;
  text-align: justify;
  text-align-last: justify;
}
.profile > dd {
  font-size: 12px;
  transform: translateY(-10px);
  display: inline-block;
}
.profile > dd:nth-of-type(n + 2)::before {
  content: "/ ";
}
.skill_list {
  letter-spacing: 0.65px;
}
.skill_list > dt {
  display: inline-block;
  color: #ff4261;
  font-weight: normal;
}
.skill_list > dt::after {
  content: ":";
  color: #000;
}
.skill_list > dd {
  display: inline-block;
}
.skill_list > dd:nth-of-type(n + 2)::before {
  content: "/ ";
}
/*
*   gallery
*******************************************/
#gallery {
  background: #ff8398;
}
.image_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
.image_list > .image_item {
  display: inline-block;
  width: 166px;
  height: 190px;
  -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  background: #fff;
  margin: 2.5px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.image_item > a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.image_item > a::after {
  content: attr(data-title);
  position: absolute;
  padding: 50% 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s;
  opacity: 0;
  z-index: 2;
  color: transparent;
  background: #ffffffcc;
}
.image_item > a.on::after {
  content: attr(data-title);
  position: absolute;
  padding: 50% 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: 2;
  color: #2d2d2de5;
}
.image_item > a > img {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  transition: 0.4s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: scale(1.05);
}
.image_item > a.on > img {
  transform: scale(1);
}
@media (min-width: 912px) {
  .image_list:first-of-type {
    margin-top: 30px;
  }

  .image_list > .image_item:nth-of-type(9n + 6),
.image_list > .image_item:nth-of-type(9n + 7),
.image_list > .image_item:nth-of-type(9n + 8),
.image_list > .image_item:nth-of-type(9n + 9) {
    margin: -95px 2.5px;
  }

  .image_list > .image_item:nth-of-type(9n + 6) {
    margin-left: 5px;
  }

  .image_list > .image_item:nth-of-type(9n + 9) {
    margin-right: 5px;
  }

  .image_list > .image_item:nth-of-type(9n + 2),
.image_list > .image_item:nth-of-type(9n + 7) {
    transition-delay: 0.15s;
  }

  .image_list > .image_item:nth-of-type(9n + 3),
.image_list > .image_item:nth-of-type(9n + 8) {
    transition-delay: 0.3s;
  }

  .image_list > .image_item:nth-of-type(9n + 4),
.image_list > .image_item:nth-of-type(9n + 9) {
    transition-delay: 0.45s;
  }

  .image_list > .image_item:nth-of-type(9n + 5) {
    transition-delay: 0.6s;
  }
}
@media (min-width: 571px) and (max-width: 911px) {
  .image_list {
    max-width: 515px;
    margin: auto;
  }

  .image_list > .image_item:nth-of-type(5n + 4),
.image_list > .image_item:nth-of-type(5n + 5) {
    margin: -95px 2.5px;
  }

  .image_list > .image_item:nth-of-type(5n + 4) {
    margin-left: 5px;
  }

  .image_list > .image_item:nth-of-type(5n + 5) {
    margin-right: 5px;
  }

  .image_list > .image_item:nth-of-type(5n + 2),
.image_list > .image_item:nth-of-type(5n + 5) {
    transition-delay: 0.15s;
  }

  .image_list > .image_item:nth-of-type(5n + 3) {
    transition-delay: 0.3s;
  }
}
@media (max-width: 570px) {
  .image_list {
    max-width: 340px;
    margin: auto;
  }

  .image_list > .image_item:nth-of-type(3n + 2) {
    margin: -95px 2.5px;
    position: relative;
    right: calc(25.5% + 2.5px);
  }

  .image_list > .image_item:nth-of-type(3n) {
    margin: -95px 2.5px;
    position: relative;
    left: calc(25.5% + 2.5px);
  }

  .image_list:last-of-type > .image_item:last-of-type {
    display: none;
  }

  .image_list > .image_item:nth-of-type(3n + 3) {
    transition-delay: 0.15s;
  }
}
/*
*   Goods & Books
*******************************************/
.contents_item {
  max-width: 590px;
  width: 100%;
  display: flex;
  margin: 30px auto 0;
  position: relative;
  padding: 0.5rem;
}
.item_thum {
  width: 170px;
  overflow: hidden;
  align-self: flex-start;
  box-shadow: 0 0 20px #ff8398;
  position: relative;
  background: #fff;
  transition: 0.4s;
}
.item_thum::before {
  content: "";
  background: #ff839840;
  top: 0;
  left: 0;
  right: 100%;
  bottom: 100%;
  z-index: 1;
  position: absolute;
  transition: 0.4s;
}
.item_thum::after {
  content: "";
  background: #ff839840;
  top: 100%;
  left: 100%;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: absolute;
  transition: 0.4s;
}
.item_thum:hover {
  box-shadow: 0 0 0 #ff8398;
  border-radius: 5px;
}
.item_thum:hover::before {
  right: 0;
  bottom: 0;
}
.item_thum:hover::after {
  top: 0;
  left: 0;
}
.item_thum > img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: 0.3s;
}
.item_thum:hover > img {
  transform: scale(0.95);
}
.shop_button {
  position: absolute;
  color: #484848;
  font-weight: 600;
  font-size: 14px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  width: 6rem;
  letter-spacing: 1px;
  z-index: 2;
  border: 1px solid #484848;
  padding: 0.2rem;
  box-sizing: content-box;
  transition: 0.4s;
  opacity: 0;
}
.item_thum:hover > .shop_button {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition-delay: 0.4s;
}
.item_text {
  align-self: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  text-align: left;
  padding-left: 40px;
  padding-right: 0;
}
.item_text > h3 {
  font-size: 29px;
  color: #ff42629b;
  font-family: serif;
  margin: 0.8rem 0 0.5rem;
  line-height: 29px;
}
.item_text > p {
  font-size: 12.5px;
  font-weight: 400;
  font-family: serif;
  margin-bottom: 0.1rem;
  padding-left: 5px;
}
.contents_item:nth-of-type(2n) {
  justify-content: flex-end;
}
.contents_item:nth-of-type(2n) > .item_thum {
  order: 1;
}
.contents_item:nth-of-type(2n) > .item_text {
  padding-left: 0;
  padding-right: 40px;
}
@media (max-width: 570px) {
  .contents_item {
    display: block;
  }

  .item_thum {
    margin: auto;
  }

  .item_text {
    padding: 0 !important;
    margin: auto;
  }

  .item_text > h3,
.item_text > p {
    text-align: center;
  }
}
/*
*   history
*******************************************/
#event_history {
  background: #e4e4e4;
}
.event_list {
  display: inline-block;
  max-width: 720px;
  width: 100%;
  margin: 0;
}
.event_list > dt {
  color: #ff4261;
  float: left;
  width: 100px;
  min-height: 24px;
  line-height: 24px;
  text-align: left;
  padding-top: 5px;
  font-weight: normal;
}
.event_list > dd {
  float: left;
  max-width: 566px;
  width: calc(100% - 100px);
  min-height: 24px;
  line-height: 24px;
  text-align: left;
  padding-top: 5px;
}
.event_list:nth-of-type(n + 2) > dt:first-of-type,
.event_list:nth-of-type(n + 2) > dd:first-of-type {
  margin-top: 30px;
}
.event_list > dd::before {
  content: "-";
  padding-right: 10px;
}
.event_list:last-of-type > dd:last-of-type::after {
  content: "\u203B\u30B5\u30FC\u30AF\u30EB\u521D\u53C2\u52A0";
  padding-left: 10px;
}
@media (max-width: 570px) {
  .event_list > dt {
    float: none;
  }

  .event_list > dd {
    float: none;
    width: 100%;
    padding-left: 2rem;
  }

  .event_list > dd::before {
    content: "";
    padding-right: 0;
  }

  .first_event::after {
    content: "\\a\u203B\u30B5\u30FC\u30AF\u30EB\u521D\u53C2\u52A0";
    padding-left: 0;
    white-space: pre;
  }

  .event_list:nth-of-type(n + 2) > dd:first-of-type {
    margin-top: 0;
  }
}
/*
*   contact
*******************************************/
#contact {
  padding-bottom: 75px;
}
.contact_form {
  max-width: 720px;
  margin: 0 auto;
}
.message_detail {
  font-size: 14px;
  text-align: center;
  margin-bottom: 3px;
  color: #000;
}
#contact p:nth-of-type(n + 2) {
  margin-bottom: 5px;
}
#contact p:nth-last-of-type(2) {
  margin-bottom: -1px;
}
#contact input,
#contact textarea {
  width: 100%;
  border: none;
  background: #ff8398;
  padding: 0 10px;
}
#contact input {
  height: 2rem;
}
#contact input::placeholder,
#contact textarea::placeholder {
  color: #252525;
}
#contact button {
  background: transparent;
  border: 2px solid #ff8398;
  height: 28px;
  width: 100%;
}
#contact .modal_wrap {
  background: #ff8398b3;
  z-index: 101;
}
#contact dl {
  padding: 0 30px;
  min-height: 150px;
}
#contact dt {
  float: left;
  width: 140px;
  min-height: 35px;
  line-height: 24px;
  text-align: left;
  padding-top: 5px;
}
#contact dd {
  float: left;
  width: calc(100% - 140px);
  min-height: 35px;
  line-height: 24px;
  text-align: left;
  padding-top: 5px;
  max-height: 10rem;
  overflow-x: auto;
}
#contact dd:last-of-type {
  margin-bottom: 0.5rem;
}
button#submit,
button#cancel,
button#close {
  width: 175px;
  padding: 7px 0;
  height: auto;
  border-radius: 0.3rem;
}
button#submit {
  background: #ff8398;
  border: 2px solid #ff8398;
  color: #fff;
  margin: 0 13px;
}
button#cancel {
  background: #e4e4e4;
  border: 2px solid #e4e4e4;
  margin: 0 13px;
}
button#close {
  background: #e4e4e4;
  border: 2px solid #e4e4e4;
}
#notice {
  min-height: 24px;
  margin-top: 5px;
  text-align: left;
  color: #ff415a;
}
@media (max-width: 570px) {
  .message_detail {
    text-align: left;
  }

  #contact dl {
    padding: 0 15px;
  }

  #contact dt {
    float: none;
    min-height: auto;
    font-size: 0.9rem;
  }

  #contact dd {
    float: none;
    width: 100%;
    min-height: auto;
    max-height: 80px;
    overflow-y: auto;
    padding-top: 0;
    padding-left: 0.5rem;
  }
}
/*
*   footer
*******************************************/
footer {
  text-align: center;
  margin: 90px 0 10px;
  font-size: 12px;
}
/*
*   icon
*******************************************/
.sns_icon {
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 35px;
  height: 35px;
  margin: 0 0.5rem;
  cursor: pointer;
}
.sns_icon > .icon_hover {
  transition: 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background: #fff;
}
.sns_icon:hover > .icon_hover {
  opacity: 1;
}
/*
*   \u672A\u6574\u9813
*******************************************/
#result {
  background: #ff8398;
  overflow: hidden;
}
#result .content_wrap {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  padding: 100vh 0;
}
#result a {
  color: #007bff;
}
.lightboxOverlay {
  background-color: #ff7b8d;
  opacity: 0.6;
}
.lb-data {
  color: #fff;
}
.lb-data .lb-number {
  font-weight: 100;
  color: #fff;
}`;n(function(){var o=n(window).innerHeight();n("#hero").css("height",o),n("#result").css("height",o),n(".top_img").css("height",o);var m=n("header .modal_wrap");n("#menu").click(function(){n(this).hasClass("on")?(n(this).removeClass("on").addClass("off"),n("#main_menu").fadeOut(750),m.delay(750).queue(function(){n(this).removeClass("on").delay(750).fadeOut("fast").dequeue()})):(n(this).removeClass("off").addClass("on"),m.fadeIn("fast").addClass("on"),n("#main_menu").delay(750).fadeIn(400))}),n(".modal_wrap nav a").click(function(){n("#menu").removeClass("on").addClass("off"),n("#main_menu").fadeOut(750),m.delay(750).queue(function(){n(this).removeClass("on").delay(750).fadeOut("fast").dequeue()})});let c=[];const r=n(".random_set_text");r.each(function(t){const e=r.eq(t).text();let a=[...Array(e.length).keys()];a=a.sort(function(){return Math.random()-.5}),r.eq(t).html("");for(let i=0;i<e.length;i++){const p=a[a.length-1];a.pop(),r.eq(t).append('<span class="random_text" style="transition-delay: 0.'+p+'s;">'+e[i]+"</span>")}c[t]=r.eq(t).offset().top});let f=[];const d=n(".fade_in_block");d.each(function(t){f[t]=d.eq(t).offset().top});const g=o-o/6;var u=n(".top_logo").offset().top,x=n(".top_logo").height();n(window).scroll(function(){var t=n(this).scrollTop();const e=u+x/2+-t/10;e<=o&&n(".top_logo").css("top",e);const a=t>o?0:-t/2;a>=-o&&n(".top_img").css("top",a),r.each(i=>{t>=c[i]-g&&r.eq(i).children("span").addClass("on")}),d.each(i=>{t>=f[i]-g&&d.eq(i).addClass("on")})});var A=[{"":/.png/g},{"":/.jpg/g},{" ":/_/g},{"":/img\u002f/g}],l=n(".image_list a");l.each(function(t){var e=l.find("img").eq(t).attr("src").replace("thum/","");l.eq(t).attr("href",e),n.each(A,function(a,i){n.each(i,function(p,k){e=e.replace(k,p),l.eq(t).attr("data-title",e)})})}),l.on("touchstart",function(){n(this).addClass("on")}).on("touchend",function(){n(this).delay(500).queue(function(){n(this).removeClass("on").dequeue()})}),l.hover(function(){n(l).removeClass("on"),n(this).addClass("on")},function(){n(this).removeClass("on")}),n(".contact_form button").on("click",function(){if(name=n('input[name="\u304A\u540D\u524D"]').val(),title=n('input[name="\u4EF6\u540D"]').val(),mail=n('input[name="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"]').val(),message=n('textarea[name="\u672C\u6587"]').val(),name==="")return n("#notice").html("\u203B\u304A\u540D\u524D\u304C\u672A\u5165\u529B\u3067\u3059");if(title==="")return n("#notice").html("\u203B\u4EF6\u540D\u304C\u672A\u5165\u529B\u3067\u3059");if(mail==="")return n("#notice").html("\u203B\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u672A\u5165\u529B\u3067\u3059");if(!mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/))return n("#notice").html("\u203B\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093");if(message==="")return n("#notice").html("\u203B\u672C\u6587\u304C\u672A\u5165\u529B\u3067\u3059");n("#notice").html(""),n("#contactName").html("").html(name),n("#contactTitle").html("").html(title),n("#contactMail").html("").html(mail),n("#contactMessage").html("").html(message.replace(/\r?\n/g,"<br>")),n("#contact .modal_wrap").fadeIn()}),n("#cancel").on("click",function(){n("#contact .modal_wrap").fadeOut()}),n("#submit").on("click",function(){n("#contact_form").submit()});var h=0,s=0,b=0,y=n("img").length;n("img").each(function(){var t=n(this).attr("src");n("<img>").attr("src",t).on("load",function(){}),b++}),h=Math.ceil(100*b/y);var w=window.setInterval(function(){s>=100?(window.clearInterval(w),o=n(window).innerHeight(),n("#hero").css("height",o),n("#loader").delay(200).fadeOut().queue(function(){n(window).scrollTop(0),n(".loading_window").removeClass("on").delay(750).queue(function(){n(this).fadeOut().dequeue(),n(".random_text, .fade_in_block").removeClass("on")})})):s<h&&(s++,n("#load-text").html(s+"%"),n("#bar span").css("width",s+"%"))},20)});
