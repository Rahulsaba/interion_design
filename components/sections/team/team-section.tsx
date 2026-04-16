import Image from "next/image";

const teamMembers = [
  {
    name: "Rodrigues Christy",
    role: "Project Manager",
    image: "/images/teams/team_1.jpg",
  },
  {
    name: "Matthew Hong",
    role: "CEO & Founder",
    image: "/images/teams/team_1.jpg",
  },
  {
    name: "Anita Bentley",
    role: "Marketing Manager",
    image: "/images/teams/team_1.jpg",
  },
  {
    name: "Beverly Dyer",
    role: "Civil Engineer",
    image: "/images/teams/team_1.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f3f3f3] py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="text-center">
          <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-sm font-semibold text-white">
            <i className="fa-regular fa-building text-xs" />
            Our Team
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#07225c] md:text-[56px]">
            Meet With Our <span className="text-[var(--primary-color)]">Experts</span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-[var(--primary-color)]" />
            <span className="h-[3px] w-2 rounded-full bg-[var(--primary-color)]/80" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="text-center">
              <div className="relative overflow-visible rounded-[30px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={380}
                  className="h-[300px] w-full rounded-[30px] object-cover"
                />
                <span className="absolute bottom-0 right-2 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-[0_8px_18px_rgba(248,154,28,0.35)]">
                  <i className="fa-solid fa-share-nodes text-[13px]" />
                </span>
              </div>

              <h3 className="mt-7 text-[18px] leading-tight font-bold text-[#112655] md:text-[20px]">
                {member.name}
              </h3>
              <p className="mt-1 text-[17px] font-semibold text-[var(--primary-color)]">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
