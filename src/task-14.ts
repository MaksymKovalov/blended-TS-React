// Task 14: Promise typing

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Hello from server!");
  });
}

fetchMessage().then((message) => {
  console.log(message);
  console.log(`Message length: ${message.length}`);
});

async function displayMessage(): Promise<void> {
  const message = await fetchMessage();
  console.log(`Async message: ${message}`);
}

displayMessage();

fetchMessage()
  .then((message) => message.toUpperCase())
  .then((uppercaseMessage) => {
    console.log(`Uppercase: ${uppercaseMessage}`);
  });

export { fetchMessage, displayMessage };