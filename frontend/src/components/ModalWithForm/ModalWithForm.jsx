function ModalWithForm({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropigation()}>
        <button className="close" onClick={onClose}>
          X
        </button>
        <h2>Sign In</h2>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
}
