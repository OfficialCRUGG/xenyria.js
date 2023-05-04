const { Xenyria } = require("../dist");
const { config } = require("dotenv");
config();

const xenyria = new Xenyria(process.env.XENYRIA_TOKEN);

test(".player.fetch()", async () => {
  const response = await xenyria.player.fetch("CRUGG");
  expect(response.data?.xen_id).toEqual(4964);
  expect(response.data?.uuid).toEqual("1279b4d9-cd87-487a-b812-dee3c7aae15b");
  expect(response.data?.username).toEqual("CRUGG");
  expect(response.success).toEqual(true);
});
