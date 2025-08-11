function ErrorMessage({ error, onRetry }) {
  return (
    <div className="error-message">
      <p>{error}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default ErrorMessage;
