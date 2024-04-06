class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public";
  _apiKey = "94233dbed83f30ea420bcda4b0d99b71";

  getData = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getData(
      `${this._apiBase}/characters?limit=9&offset=210&apikey=${this._apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getData(
      `${this._apiBase}/characters/${id}?apikey=${this._apiKey}`
    );
  };
}

export default MarvelService;
