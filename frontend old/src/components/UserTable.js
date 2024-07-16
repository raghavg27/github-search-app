// src/components/UserTable.js

// component to generate table of user profile data
import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Avatar</th>
          <th>Profile</th>
          <th>Followers</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.login}</td>
            <td>
              <img src={user.avatar_url} alt={user.login} className="avatar" />
            </td>
            <td>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </td>
            <td>{user.followersCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
