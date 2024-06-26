export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours();
  const isDayTime = hours >= 6 && hours < 18;

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}

export function getTime(dateTime: string) {
  try {
    if (!dateTime || typeof dateTime !== "string") {
      throw new Error("Invalid input: input must be a non-empty string");
    }

    const [datePart, timePart] = dateTime.split(" ");

    if (!datePart || !timePart) {
      throw new Error(
        'Invalid format: the input must be in "YYYY-MM-DD HH:MM:SS" format'
      );
    }

    const [hours, minutes, seconds] = timePart.split(":");

    if (hours === undefined || minutes === undefined || seconds === undefined) {
      throw new Error(
        'Invalid time format: the time part must be in "HH:MM:SS" format'
      );
    }

    return `${
      parseInt(hours, 10) < 10 ? "0" + parseInt(hours, 10) : parseInt(hours, 10)
    }:${
      parseInt(minutes, 10) < 10
        ? "0" + parseInt(minutes, 10)
        : parseInt(minutes, 10)
    }`;
  } catch (error) {
    console.error(error);
    return null;
  }
}
