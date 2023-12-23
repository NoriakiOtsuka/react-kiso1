import { Link } from 'react-router-dom';

export const ThreadItem = props => {
  const { id, title } = props;

  return (
    <>
      <div className="thread">
        <Link to={"/thread/" + id}>{title}</Link>
      </div>
    </>
  );
}