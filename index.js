/**
 * Auto reload a page at a specified interval.
 *
 * @param {string} url Url to be opened
 * @param {number} [interval=60 * 1000] Interval between each reload
 * @param {string} [title="Page content auto reloading"] An optional page title for the separate window
 */
function autoReloadPage(
  url,
  interval = 60 * 1000,
  title = "Page content auto reloading",
) {
  const w = window.open("about:blank", "_blank");
  w.document.write(/* html */ `<!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <script>
          window.addEventListener("load",() => {
            const frame = document.getElementsByTagName("frame")[0];
            frame.addEventListener("load", () => {
              window.setTimeout(function(){
                frame.src = frame.src;
              }, ${interval});
            }, false);
            frame.src = "${url}";
          },false);
        </script>
      </head>
      <frameset><frame src="about:blank"></frameset>
    </html>`);
  w.document.close();
}

export default autoReloadPage;
