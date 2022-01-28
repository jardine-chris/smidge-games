export function getDate(post) {
  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  let date = new Date(post.date).toLocaleDateString("en-us", dateOptions);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/New_York",
    timeZoneName: "short",
  };
  let time = new Date(post.date).toLocaleTimeString("en-us", timeOptions);

  let today = new Date(Date.now()).toLocaleDateString("en-us", dateOptions);
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  yesterday = yesterday.toLocaleString("en-us", dateOptions);
  console.log("Post Date: " + date + "\n Yesterday: " + yesterday);

  if (date === today) {
    date = "Today";
  } else if (date === yesterday) {
    date = "Yesterday";
  }

  return `${date} at ${time}`;
}
