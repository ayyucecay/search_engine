import styles from "./Card.module.scss";
import react from 'react';

const Card = ({results}) => {
    let display;

    if(results) {
        display = results.map((x) => {
            let { id, image, name } = x;

            return (
                <div 
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 mt-4 position-relative text-dark"
                >
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt=""/>
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                        </div>
                    </div>
                </div>

            )
        })
    }
    else{
        display = "no product found";
    }

    return <>{display}</>;
}

export default Card;
