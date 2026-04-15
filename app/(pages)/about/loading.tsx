export default function AboutLoading() {
  return (
    <section className="flex min-h-[50vh] w-full items-center justify-center bg-[#f5f5f5] px-4 py-10">
      <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
        <span className="absolute h-20 w-20 animate-spin rounded-full border-4 border-[#f7901d]/25 border-t-[#f7901d] sm:h-24 sm:w-24" />
        <span className="absolute h-12 w-12 animate-spin rounded-full border-4 border-[#f7901d]/30 border-b-[#f7901d] [animation-direction:reverse] sm:h-14 sm:w-14" />
      </div>
    </section>
  );
}
