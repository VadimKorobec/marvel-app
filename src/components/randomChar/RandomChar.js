import React from "react";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";

class RandomChar extends React.Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharLoader = (char) => {
    this.setState({ char });
    this.setState(({ loading }) => ({ loading: !loading }));
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoader)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {errorMessage}
        {spiner}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char: { thumbnail, name, description, homepage, wiki } }) => {
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt={name} className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description
            ? `${description.slice(0, 210)}...`
            : "There is no description for this character"}
        </p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
