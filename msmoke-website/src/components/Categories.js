import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div className="categories">
        <Link to="/liquid/nicotine">
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
        <Link to="/products/premix">
          <div className="category--liquids card">
            <div className="card--front premix--front">
              <p className="card__heading text--upper font--categories text--bold">
                Premixy
              </p>
            </div>
            <div className="card--back premix--back">
              <p className="card__heading text--upper font--categories text--bold">
                Premixy
              </p>
              <p>Masz nie wiele bazy ? Do premixa wystarczy ;P</p>
            </div>
          </div>
        </Link>
        <Link to="/products/longfill">
          <div className="category--liquids card">
            <div className="card--front longfill--front">
              <p className="card__heading text--upper font--categories text--bold">
                Longfille
              </p>
            </div>
            <div className="card--back longfill--back">
              <p className="card__heading text--upper font--categories text--bold">
                Longfille
              </p>
              <p>Skoncentrowany aromat, dolej bazy i ciesz sie smakiem !</p>
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
        <Link to="/cartridge/type">
          <div className="category--parts card">
            <div className="card--front cartridge--front">
              <p className="card__heading text--upper font--categories text--bold">
                cartridge
              </p>
            </div>
            <div className="card--back cartridge--back">
              <p className="card__heading text--upper font--categories text--bold">
                cartridge
              </p>
              <p>Masz juz poda? Kup sobie nowy cartridge!</p>
            </div>
          </div>
        </Link>
        <Link to="/products/pod">
          <div className="category--parts card">
            <div className="card--front pody--front">
              <p className="card__heading text--upper font--categories text--bold">
                pody
              </p>
            </div>
            <div className="card--back pody--back">
              <p className="card__heading text--upper font--categories text--bold">
                pody
              </p>
              <p>Baterie które wymagają jedynie cartridge'a i liquidu :D</p>
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
              <p>Spaliłeś grzałkę? To nie problem, tu znajdziesz nowe!</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
