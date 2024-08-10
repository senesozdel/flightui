import axios from 'axios'
export const getFlightData = async()=>{

    const response =await axios.get("http://localhost:8000/api/flights");

    console.log(response.data)

}
export const getFlightDestinations = async (setDestinations) => {
    try {
        const response = await axios.get("http://localhost:8000/api/dest");
        console.log(response.data);
        setDestinations(response.data);
    } catch (error) {
        console.error('Destinasyonlar alınamadı:', error);
    }
};