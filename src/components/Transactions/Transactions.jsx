import PropTypes from 'prop-types';
import css from "./Transactions.module.css";

export default function TransactionHistory ({items}) {
    
    const rows = items.map(({id, type, amount, currency}) => {
        
        return (<>
             <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
             </tr>
    </> )
    })
    return (
  <div className={css["table-section"]}>
    <table className={css["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </div>) 
    
}

TransactionHistory.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}