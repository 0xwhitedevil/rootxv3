import useInView from '../hooks/useInView';

const TEAM = [
  {
    name: 'Rakesh Elamaran',
    role: 'Founder',
    initials: 'RE',
    img: 'https://therootx.com/img/team/team01.jpg',
    bio: "Visionary leader driving the RootX mission to make enterprise-grade cybersecurity accessible to every organization.",
    tags: ['VAPT', 'Strategy', 'Pentest', 'Leadership'],
    linkedin: 'https://www.linkedin.com/company/rootx-services/',
    instagram: 'https://www.instagram.com/rootx.services',
  },
  {
    name: 'Abisheik Magesh',
    role: 'Co-Founder',
    initials: 'AM',
    img: 'https://therootx.com/img/team/team05.jpg',
    bio: 'Technical architect and security researcher building the tools and methodologies that keep RootX clients protected.',
    tags: ['Red Team', 'Forensics', 'Bug Bounty', 'Research'],
    linkedin: 'https://www.linkedin.com/company/rootx-services/',
    instagram: 'https://www.instagram.com/rootx.services',
  },
  {
    name: 'Thaya Gozwig',
    role: 'Creative & Design Head',
    initials: 'TG',
    img: 'https://therootx.com/img/team/team06.jpg',
    bio: 'Crafting the visual language of security, turning complex threat data into clear, compelling narratives for clients.',
    tags: ['UI/UX', 'Branding', 'Reports', 'Design'],
    linkedin: 'https://www.linkedin.com/company/rootx-services/',
    instagram: 'https://www.instagram.com/rootx.services',
  },
];

function TeamCard({ member, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`team-card reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: inView ? `${delay}s` : '0s' }}
    >
      <div className="team-card__img-wrap">
        <div className="team-card__fallback">
          <div className="team-card__initials">{member.initials}</div>
        </div>
        <img
          className="team-card__img"
          src={member.img}
          alt={member.name}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div className="team-card__scan-line" />
        <div className="team-card__overlay" />
        {/* V0.3 #1: team social links hidden for now */}
      </div>
      <div className="team-card__info">
        <div className="team-card__corner-glow" />
        <div className="team-card__role">{member.role}</div>
        <div className="team-card__name">{member.name}</div>
        <p className="team-card__bio">{member.bio}</p>
        <div className="team-card__divider" />
        <div className="team-card__tags">
          {member.tags.map(tag => (
            <span className="team-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section className="team" id="team">
      <div className="section-inner">
        <div
          ref={headerRef}
          className={`team__header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div>
            <div className="section-tag">The People</div>
            <h2 className="section-h2">Meet the Team<br />Behind RootX</h2>
          </div>
          <p className="section-sub">
            Security is not just software. It is the humans who think like attackers and defend like warriors.
          </p>
        </div>
        {/* V0.1 #6: scroll-snap carousel on mobile, grid on desktop */}
        <div className="team__carousel">
          <div className="team__grid">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.15} />
            ))}
          </div>
          <div className="team__hint" aria-hidden="true">← swipe →</div>
        </div>
      </div>
    </section>
  );
}
