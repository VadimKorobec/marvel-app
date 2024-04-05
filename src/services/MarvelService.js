class MarvelService {
  getData = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getData(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=94233dbed83f30ea420bcda4b0d99b71"
    );
  };
}

export default MarvelService;
