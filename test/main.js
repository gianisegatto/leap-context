const ContextLoader = require("./../src/main/node/ContextLoader");

const PATH = process.cwd() + "/test/example/src";

const contextLoader = new ContextLoader();

contextLoader.load(PATH);
