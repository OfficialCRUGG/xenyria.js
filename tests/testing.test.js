const { Xenyria } = require("../dist");
const { config } = require("dotenv");
config();

const xenyria = new Xenyria(process.env.XENYRIA_TOKEN);

test(".testing.hello()", async () => {
  const response = await xenyria.testing.hello();
  expect(response).toEqual({
    success: true,
    message: "Hello! :)",
  });
});
