import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";
const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { data, error, loading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>loading...</p>;
    if (!loading && error) return <p>{error}</p>;
    if (!loading && !error && userData && data.length)
      return (
        <div>
          <h2>user List:</h2>
          {data.map((u) => (
            <p key={u.id}>{u.name}</p>
          ))}
        </div>
      );
  };

  return <div>{renderUsers()}</div>;
};
export default UserContainer;
