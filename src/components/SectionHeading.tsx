export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className={`eyebrow ${center ? 'justify-center' : ''} ${light ? 'text-gold-300' : ''}`}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl text-balance ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
