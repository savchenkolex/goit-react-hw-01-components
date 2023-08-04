import PropTypes, { shape } from 'prop-types';
import css from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div className={css['table-section']}>
      <table className={css['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
             
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
