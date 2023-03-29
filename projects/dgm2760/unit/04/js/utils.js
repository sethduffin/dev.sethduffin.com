export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomDate() {
  const start = new Date();
  const end = new Date()

  end.setMonth(end.getMonth() + 3);

  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const dateString = date.toLocaleString('en-US', { month: 'long', day: 'numeric' })

  return dateString;
}
