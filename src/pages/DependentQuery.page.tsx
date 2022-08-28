import React, { FC } from "react";

import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async (email: string) => {
  const res = await axios.get<any>(`http://localhost:4000/users/${email}`);
  return res.data;
};

const fetchCourses = async (channelId: string) => {
  const res = await axios.get<any>(
    `http://localhost:4000/channels/${channelId}`
  );
  return res.data;
};

const DependentQueryPage: FC<{ email: string }> = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUser(email));
  const channelId = user?.channelId;
  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCourses(channelId),
    {
      enabled: channelId !== undefined,
    }
  );

  console.log(user, channelId, courses);
  return <div></div>;
};

export default DependentQueryPage;
