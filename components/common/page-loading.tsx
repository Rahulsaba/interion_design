export default function PageLoading() {
  return (
    <section className="flex min-h-[50vh] w-full items-center justify-center bg-[var(--section-bg)] px-4 py-10">
      <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
        <span className="absolute h-20 w-20 animate-spin rounded-full border-4 border-[var(--primary-color)]/25 border-t-[var(--primary-color)] sm:h-24 sm:w-24" />
        <span className="absolute h-12 w-12 animate-spin rounded-full border-4 border-[var(--primary-color)]/30 border-b-[var(--primary-color)] [animation-direction:reverse] sm:h-14 sm:w-14" />
      </div>
    </section>
  );
}
