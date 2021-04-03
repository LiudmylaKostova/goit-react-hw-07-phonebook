import { filterContacts } from '../../redux/phoneBook/actions';
import { connect } from 'react-redux';
import styles from './Filter.module.css';

const Filter = props => {
  return (
    <div className={styles.div}>
      <label className={styles.Label}>
        Search contact's name
        <input
          className={styles.input}
          type="search"
          name="filter"
          id="filter"
          onChange={event => props.onFilterContacts(event.target.value)}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToprops = {
  onFilterContacts: filterContacts,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);
