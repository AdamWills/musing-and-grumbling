import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-between">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-8 text-musing-yellow stroke-black stroke-1">
        <span className="text-musing-orange">Musing</span> and Grumbling.
      </h1>
      <p className="text-xl max-w-2xl mx-auto text-white">
        MUSING and grumbling is created and authored (occasionally) by me:
        educator, researcher, editor, writer, campus radio host, public speaker
        and consultant Laura M. Wiebe. <Link href="/about">More…</Link>
      </p>
    </section>
  );
};

export default Intro;
