export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
      <img
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: cover }}
      />
      <div
        className="rounded rounded-3 p-2"
        style={{ backgroundColor: "#E5E7EB" }}
      >
        <span className="fw-semibold">{username}</span>
        <br />
        <span>{replyText}</span>
      </div>
    </div>
  );
};
