export default function TransactionHistory ({items}) {
    console.log(items);
    //
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
        <table class="transaction-history">
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