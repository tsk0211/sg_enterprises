const exp = require("express");
const auth = require("./env.json");

let PORT = auth.PORT;

const server = exp();

server.post("/api/sendmail");

server.listen(PORT, () => {
	console.log(`Server is live on : http://localhost:${PORT}`);
});
