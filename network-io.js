const https = require("https");

const MAX_CALLS = 16;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://google.com", (response) => {
      response.on("data", (_data) => {});
      response.on("end", () => {
        console.log(`Response ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
