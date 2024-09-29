export function convertKelvinToCelsius(tempInKelvin: number): number {
  const tempInCelsius = tempInKelvin - 273.15;
  return Math.floor(tempInCelsius);
}

export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInKilometersPerHour = speedInMetersPerSecond * 3.6;
  return `${speedInKilometersPerHour.toFixed(0)} km/h`;
}

export function metersToKilometers(visibilityInMeters: number): string {
  const visibilityInKilometers = visibilityInMeters / 1000;
  return `${visibilityInKilometers.toFixed(0)} km`;
}

export function dateToWeekDay(dateTime = "2024-01-01 00:00:00") {
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const date = new Date(dateTime);

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  const index = date.getDay();

  return weekdays[index];
}
