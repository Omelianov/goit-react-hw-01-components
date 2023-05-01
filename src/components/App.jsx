

import { Profile } from "./profile/Profile";
import user from 'user.json';



export const App = () => {
  return (
    <div
    ><Profile
        // userProps={user}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
