import classes from "./Card.module.css";

const Card = (props) => {
  let statusIndicator;
  if (props.status === 'UP') {
    statusIndicator = classes.statusGreen;
  } else if (props.status === 'DOWN') {
    statusIndicator = classes.statusRed
  } else {
    statusIndicator = classes.statusGray
  }
  return (
    <div className={classes.card}>
      <h4>Title {props.company_name}</h4>
      <div className={classes.inner}>
        <ul>
          <li>Currency: {props.currency}</li>
          <li>Industry: {props.industry}</li>
          <li>Market cap: {props.market_cap}</li>
          <li>Popularity index: {props.popularityIndex}</li>
          <li>Stock name: {props.stock_name}</li>
          <li>Stock symbol: {props.stock_symbol}</li>
          <li>Price: {props.price}</li>
        </ul>
        <div id={props.company_id} className={`${classes.status} ${statusIndicator}`}></div>
      </div>
    </div>
  );
};

export default Card;
