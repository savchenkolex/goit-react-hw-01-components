import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics ({title, stats}) {
  console.log(stats);
  const listItem = stats.map(({id,label,percentage})=>{
    return (
      <li key={id} className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    )
  })
    return (
<section className={css.statistics}>
  {title && (<h2 className={css.title}>{title}</h2>)}

  <ul className={css.statlist}>
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