function autoReloadPage(
  url,
  interval = 60 * 1000,
  title = "Page content auto reloading"
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

module.exports = autoReloadPage;
