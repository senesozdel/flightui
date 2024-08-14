// request atarken belirlenen base url
export const baseURL = "";

// aktif bir kullanıcı girişi olmadığı için default olarak verilen passangername
export const passengerName = "senes";

//myFligts sayfasında görüntülenen uçuçların level tipinini belirten dizi
export const flightleveltype = [{ label: "Main", value: "" }, { label: "Comfort", value: "+20$" }, { label: "First Class", value: "+50$" }, { label: "Dela One", value: "+80$" }, { label: "Bussiness", value: "+100$" },]

// default olarak belirlenen blog tipleri
export const blogtypes = ["car", "hotel", "holiday"];

//filter componenti için belirlenen select bileşininin opsiyonları
export const filterOptions = [
    { value: 'D', label: 'Departure' },
    { value: 'A', label: 'Arrival' },
]
//filter componenti için belirlenen saat aralığı nesnesi
export const departureTimes = [
    { start: '04:00', end: '11:59' },
    { start: '12:00', end: '16:59' },
    { start: '20:00', end: '03:59' },
]

// bookFlightBox componenti içerisindeki <Select /> bileşeni için ayarlanmış css özellikleri
export const bookFlightBoxselectStyle = {
    control: (provided) => ({
        ...provided,
        border: 'none', // Sınırı kaldırmak için
        boxShadow: 'none', // Odağı kaldırmak için
        width: '12rem'

    }),
};

// myflights sayfası içerisindeki <Select /> bileşeni için ayarlanmış css özellikleri
export const myFlightsEditButtonselectStyle = {
    control: (provided) => ({
      ...provided,
      border: 'none', // Sınırı kaldırmak için
      boxShadow: 'none', // Odağı kaldırmak için
      width: '10rem',
      backgroundColor: 'transparent'

    }),
    indicatorSeparator: () => ({
      display: 'none', // Ayırıcıyı kaldır
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'blue', // Aşağı ok rengini mavi yap
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'blue', // Placeholder metin rengi
    }),
  };

  //myflights sayfasında default olarak filtreleme string dizisi
export const searchItems = ["Times", "Stops", "Airlines", "Airports", "Amenities"]
