import imageMobile from "../images/image-product-mobile.jpg";
import imageDesktop from "../images/image-product-desktop.jpg";
import { ReactComponent as Icon} from "../images/iconcart.svg"
import "../styles/layout/_card.scss";

const Card = () => {
  return (
    <>
      <div className="main">
        <div className="main__card">
          <div className="main__image">
            <img
              src={imageMobile}
              alt="Perfume"
              className="main__image--mobile"
            />
            <img
              src={imageDesktop}
              alt="Perfume"
              className="main__image--desktop"
            />
            <div className="main__info">
              <h2 className="main__category">PERFUME</h2>
              <h1 className="main__tittle">Gabrielle Essence Eau De Parfum</h1>
              <p className="main__paragraph">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>

              <div className="main__prices">
                <span className="main__price">$149.99</span>
                <span className="main__old-price">$169.99</span>
              </div>
              <div className="main__add">
                <button className="main__button">
                <Icon/> 
                <span className="main__button--add">Add to Cart</span> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
