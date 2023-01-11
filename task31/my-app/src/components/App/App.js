
import { selectIsLoading } from '../../store/selectors/users';
import ContactList from '../ContactList/ContactList';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import InputBlock from '../InputBlock/InputBlock';
// import { useEffect } from 'react'
// import api from '../../api';
// import { setUser, getUsers } from '../../store/actions/contacts';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers);
  // }, [])
  
  return (
    <>
      {isLoading? ('LOADING...') : (
      <>
        <HeaderBlock />
        <ContactList />
        <InputBlock />
      </>
      )}
    </>
  )
}

export default App
