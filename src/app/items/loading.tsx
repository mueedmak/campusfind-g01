export default function Loading() {
  return (
    <div
      className="container page-section"
      role="status"
      aria-label="Loading item board"
    >
      <div className="skeleton skeleton-title" />
      <div className="item-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton skeleton-card" />
        ))}
      </div>
      <p>Finding your next connection…</p>
    </div>
  );
}
