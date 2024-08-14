
// datetimestringi 00:00 formatına çevirir
export const takeLandingTime = (datetimeString) => {
  // "T" karakterine göre ayır
  const timePart = datetimeString.split("T")[1];

  // ".000+02:00" kısmını ayırmak için "." karakterine göre ayır
  const [time] = timePart.split(".");
  return time;
}

// Saat aralığının geçerli olup olmadığını kontrol eder
export function isInInterval(time, start, end) {

  // Yardımcı fonksiyon: Saat string'ini dakikaya çevirir (sadece saat ve dakika kısmını alır)

  function timeToMinutes(time) {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  }

  const timeMinutes = timeToMinutes(time);
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  if (endMinutes < startMinutes) {
    // Geceyi kapsayan aralık
    return timeMinutes >= startMinutes || timeMinutes <= endMinutes;
  } else {
    // Normal aralık
    return timeMinutes >= startMinutes && timeMinutes <= endMinutes;
  }
}
// Parametre olarak alınan datestringi yyyy-MM-dd formatına çevirir
export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Aylar 0-11 arasında olduğu için +1 ekliyoruz
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
// Uçuşları getirdiğimizde fiyat propları olmadığı için yazılmış 0-500 arasında değer dönen metot
export const randomPrice = () => {
  return Math.round(Math.random() * 500)
}