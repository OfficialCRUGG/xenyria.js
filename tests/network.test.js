const { Xenyria } = require("../dist");
const { config } = require("dotenv");
config();

const xenyria = new Xenyria(process.env.XENYRIA_TOKEN);

test(".network.playerList()", async () => {
  const response = await xenyria.network.playerList();
  expect(response.data?.length > 0).toEqual(true);
  expect(response.success).toEqual(true);
});

test(".network.maintenance()", async () => {
  const response = await xenyria.network.maintenance();
  expect(response.success).toEqual(true);
});
