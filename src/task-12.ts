// Task 12: Callback typing

type CallbackFunction = (status: string) => void;

function sendDoneStatus(callback: CallbackFunction): void {
  callback("done");
}

sendDoneStatus((status) => {
  console.log(`Status received: ${status}`);
});

sendDoneStatus((status) => {
  if (status === "done") {
    console.log("Task completed successfully!");
  }
});

const logStatus: CallbackFunction = (status) => {
  console.log(`[LOG]: ${status}`);
};

sendDoneStatus(logStatus);

export { sendDoneStatus, CallbackFunction };