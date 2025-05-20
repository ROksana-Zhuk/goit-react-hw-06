import clsx from 'clsx';
import css from './SearchBox.module.css'
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filtersSlice.js'





export default function SearchBox() {

    const value = useSelector((state) => state.filters.name);


    const dispatch = useDispatch();
    const onFilter = (query) => {
        dispatch(changeFilter(query));
    };

    return (
        <div className={clsx(css.box)}>
            <p className={clsx(css.title)}>Find contacts by name</p>
            <input type='text'
                   value={value}
                   onChange={(event)=> onFilter(event.target.value)}
                   className={clsx(css.input)}
                />
        </div>
      );
    }


