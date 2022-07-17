import PostCard from "../components/PostCard";

const LoginPage = ({ characters }) => {
  return (
    <div className="d-flex wrap-flex char">
      {characters.map((x) => (
        <PostCard key={x.race} char={x} />
      ))}
    </div>
  );
};

export default LoginPage;
