const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  switch(event) {
    case event.partitionKey = 0:
      candidate = event.partitionKey;
      break;
    default:
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  switch (candidate) {
    case typeof candidate !== "string":
      candidate = JSON.stringify(candidate);
      break;
    case typeof candidate === "string":
      candidate = TRIVIAL_PARTITION_KEY;
      break;
    default:
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
};