const bodyParser = require("body-parser");
function routes(app, { urlencodedParser }) {
  app.use("/user", urlencodedParser, require("./user"));
  app.use("/post", urlencodedParser, require("./post"));
}
module.exports = routes;
