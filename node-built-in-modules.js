const os = require("os");

const {
  readFileSync,
  writeFileSync,
  readFile,
  writeFile,
  watchFile,
} = require("fs");

// OS
const user = os.userInfo();

console.log(user);

// ! system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds!`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);

// filesystem sync

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
writeFileSync("./content/third.txt", `Here is the result: ${first}, ${second}`);

// filesystem Async

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/third-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
