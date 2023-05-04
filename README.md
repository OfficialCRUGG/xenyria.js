# xenyria.js

> This project is not affiliated with Mojang Studios or Xenyria.

A barebones wrapper for the Xenyria API.

## What is Xenyria?

Xenyria is a resourcepack-enabled Minecraft Network that offers various innovative gamemodes that push the boundaries of Minecraft.

## Documentation

Currently, a full documentation is being worked on. However, usage is fairly simple. Take a look at this example:

```ts
import { Xenyria } from "xenyria.js";

const xenyria = new Xenyria("YOUR_TOKEN");

const player = await xenyria.player.fetch("CRUGG");

const versionData = await xenyria.paintsquad.versionData();
```

## Links

- [Xenyria Discord](https://discord.gg/vJqA9vVtUk)
