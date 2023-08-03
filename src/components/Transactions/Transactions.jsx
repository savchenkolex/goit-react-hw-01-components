import PropTypes from 'prop-types';

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
        <table className="transaction-history">
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
    ) 
    
}

TransactionHistory.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}