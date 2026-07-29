import type { SiteData } from "@/types/site";

export function Team({ data }: { data: SiteData }) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">{data.team.headline}</h2>
        <p className="mb-10 text-gray-600">{data.team.intro}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.team.members.map((member) => (
            <div key={member.name} className="card text-center">
              <div className="image-placeholder mx-auto mb-4 aspect-square w-32 rounded-full">
                {member.image_pending ? "Foto" : member.name}
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm font-medium text-earth">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
