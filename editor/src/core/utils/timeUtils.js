const secondsToMins = (seconds) => {
  const mins = Math.round(seconds / 60.0);
  return mins;
};

export { secondsToMins };
