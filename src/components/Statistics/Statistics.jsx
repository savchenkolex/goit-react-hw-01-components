import PropTypes from 'prop-types';

export default function Statistics ({title, stats}) {

  const listItem = stats.map(({id,label,percentage})=>{
    return (
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    )
  })
    return (
<section className="statistics">
  {title && (<h2 className="title">{title}</h2>)}

  <ul className="stat-list">
    {listItem}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  id:PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number
}