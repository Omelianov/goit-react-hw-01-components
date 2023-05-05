import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr className={css.ulHead}>
                    <th className={css.liHead}>Type</th>
                    <th className={css.liHead}>Amount</th>
                    <th className={css.liHead}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>{transactions.map((transaction) => {
                const { id, type, amount, currency } = transaction;
                return (
                    <tr className={css.liBody} key={id}>
                        <td className={css.bodyItem}>{type}</td>
                        <td className={css.bodyItem}>{amount}</td>
                        <td className={css.bodyItem}>{currency}</td>
                    </tr>)
        })}
      </tbody>
    </table>
  );
}



TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}