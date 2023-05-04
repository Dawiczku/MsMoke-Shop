import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div className="categories">
        <Link to="/products/liquid">
          <div className="category--liquids card">
            <div className="card--front liquids--front">
              <p className="card__heading text--upper font--categories text--bold">
                Liquidy
              </p>
            </div>
            <div className="card--back liquids--back">
              <p className="card__heading text--upper font--categories text--bold">
                Liquidy
              </p>
              <p>
                Nikt nie lubi suchej waty, znajdz cos dobrego do zakropienia!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/products/jednorazowka">
          <div className="category--disposable-e-cigs card">
            <div className="card--front disposable--front">
              <p className="card__heading text--upper font--categories text--bold">
                Jednorazówki
              </p>
            </div>
            <div className="card--back disposable--back">
              <p className="card__heading text--upper font--categories text--bold">
                Jednorazówki
              </p>
              <p>
                Nie chcesz brac sprzetu na impreze? Jednorazowka to idealne
                rozwiazanie!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/products/zestaw">
          <div className="category--sets card">
            <div className="card--front sets--front">
              <p className="card__heading text--upper font--categories text--bold">
                zestawy
              </p>
            </div>
            <div className="card--back sets--back">
              <p className="card__heading text--upper font--categories text--bold">
                zestawy
              </p>
              <p>
                Zestaw, kup hurtem i nie przepłacaj, będziesz mieć spokój z
                zamówieniami ッ
              </p>
            </div>
          </div>
        </Link>
        <Link to="/products/sprzet">
          <div className="category--parts card">
            <div className="card--front parts--front">
              <p className="card__heading text--upper font--categories text--bold">
                czesci do e-papierósow
              </p>
            </div>
            <div className="card--back parts--back">
              <p className="card__heading text--upper font--categories text--bold">
                czesci do e-papierosow
              </p>
              <p>
                Spaliłeś grzałkę, czy może szukasz nowego kardridża ? Tak czy
                siak, znajdziesz je tutaj!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
