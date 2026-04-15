import Image from "next/image";

const teamMembers = [
  {
    name: "Rodrigues Christy",
    role: "Project Manager",
  },
  {
    name: "Matthew Hong",
    role: "CEO & Founder",
  },
  {
    name: "Anita Bentley",
    role: "Marketing Manager",
  },
  {
    name: "Beverly Dyer",
    role: "Civil Engineer",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
            <i className="fa-regular fa-building" />
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--secondary-color)] md:text-4xl">
            Meet With Our <span className="text-[var(--primary-color)]">Experts</span>
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[var(--primary-color)]" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="text-center">
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/images/teams/team_1.jpg"
                  alt={member.name}
                  width={300}
                  height={260}
                  className="h-[220px] w-full object-cover"
                />
                <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-[var(--secondary-color)]">
                {member.name}
              </h3>
              <p className="text-sm text-[#4f5d78]">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
