import SearchLocation from './searchLocation';
import SearchPropertyType from './searchPropertyType';
import { Button } from '@material-ui/core';
import styles from '../../styles/Search.module.css';
import RealtorInfo from './realtorInfo';

export default function SearchForm() {
  return (
        <div className={styles.search}>
          <RealtorInfo />
          <div className={styles.search__container}>
            <SearchLocation />  
            <SearchPropertyType />
            <Button variant="contained" color="primary">
              SEARCH
            </Button>
          </div>
        </div>
  )
}