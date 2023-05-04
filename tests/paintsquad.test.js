const { Xenyria } = require("../dist");
const { config } = require("dotenv");
config();

const xenyria = new Xenyria(process.env.XENYRIA_TOKEN);

test(".paintsquad.versionData()", async () => {
  const response = await xenyria.paintsquad.versionData();
  console.log(response.data);
  expect(Object.values(response.data?.modes).length > 0).toEqual(true);
  expect(response.success).toEqual(true);
});
