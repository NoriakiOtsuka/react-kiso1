export const PostItem = props => {
  const { threadId, posts } = props;

  return (
    <>
      <div className="thread">{posts}</div>
    </>
  );
}