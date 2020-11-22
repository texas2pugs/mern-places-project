import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kamala',
      image:
        'https://media2.fdncms.com/eastbayexpress/imager/u/original/30367458/kamala_harris_official_photo-1024x960.jpg',
      places: 150,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
