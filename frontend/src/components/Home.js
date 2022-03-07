import { React } from 'react';

import Header from './Header';
import Body from './Body';

function Home(props) {

    return (
    <>
        <Header logout={props.logout} user={props.user} />
        <Body 
            contactList={props.contactList} 
            loading={props.loading}
            handleNewContactInsert={props.handleNewContactInsert}
            handleContactDelete={props.handleContactDelete} />
    </>
    );
};

export default Home;