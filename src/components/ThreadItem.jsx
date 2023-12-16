

export const ThreadItem = props => {
  const { id, title } = props;

  return (
    <>
      <div className="thread">{title}</div>
    </>
  );
}