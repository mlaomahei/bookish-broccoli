const { getBroccoli } = require("./broccoli");

test("getBroccoli returns an object", async () => {
  const data = await getBroccoli("romanesco");
  expect(typeof data).toBe("object");
});
